variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "ap-south-1"
}

variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Domain name for the website"
  type        = string
  default     = "sumeshpradhan.com"
}

variable "bucket_name" {
  description = "S3 bucket name for static site hosting"
  type        = string
  default = "sumeshpradhan.com"
}

variable "cloudfront_price_class" {
  description = "CloudFront distribution price class"
  type        = string
  default     = "PriceClass_100"
}

variable "tags" {
  description = "Additional tags to apply to resources"
  type        = map(string)
  default     = {
    "IAC" = "Terraform"
  }
}
