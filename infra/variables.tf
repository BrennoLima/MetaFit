variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Nome do bucket S3 para o site"
  type        = string
}

variable "lambda_role_arn" {
  description = "ARN da role do Lambda"
  type        = string
}