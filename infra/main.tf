provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name
  website {
    index_document = "index.html"
    # Você pode configurar outros parâmetros de site aqui
  }
}

resource "aws_dynamodb_table" "generic_table" {
  name         = "generic-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Name = "GenericTable"
  }
}

resource "aws_lambda_function" "health_check_lambda" {
  function_name = "HealthCheckLambda"
  role          = var.lambda_role_arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  filename      = "../function.zip"

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.generic_table.name
    }
  }
}

resource "aws_api_gatewayv2_api" "health_check_api" {
  name          = "HealthCheckAPI"
  protocol_type = "HTTP"
}

resource "aws_api_gatewayv2_integration" "lambda_integration" {
  api_id             = aws_api_gatewayv2_api.health_check_api.id
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.health_check_lambda.arn
  integration_method = "POST"
}

resource "aws_api_gatewayv2_route" "health_route" {
  api_id    = aws_api_gatewayv2_api.health_check_api.id
  route_key = "GET /health"
  target    = "integrations/${aws_api_gatewayv2_integration.lambda_integration.id}"
}

resource "aws_api_gatewayv2_stage" "prod_stage" {
  api_id      = aws_api_gatewayv2_api.health_check_api.id
  name        = "$default"
  auto_deploy = true
}

# Permissão para a API Gateway chamar a Lambda
resource "aws_lambda_permission" "allow_apigateway" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.health_check_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gatewayv2_api.health_check_api.execution_arn}/*/*"
}

resource "aws_iam_role" "lambda_role" {
  name = "LambdaExecutionRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_policy_attachment" "lambda_policy_attach" {
  name       = "LambdaPolicyAttachment"
  policy_arn = "arn:aws:iam::aws:policy/AWSLambdaBasicExecutionRole"
  roles      = [aws_iam_role.lambda_role.name]
}