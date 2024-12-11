output "s3_bucket_website_url" {
  value = aws_s3_bucket.website.website_url
}

output "lambda_function_name" {
  value = aws_lambda_function.health_check_lambda.function_name
}

output "api_gateway_url" {
  value = aws_api_gatewayv2_api.health_check_api.api_endpoint
}