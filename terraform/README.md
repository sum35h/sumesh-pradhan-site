# Sumesh Pradhan Portfolio Site - Infrastructure

This directory contains Terraform configuration for managing the infrastructure.

## Prerequisites

- Terraform >= 1.0
- AWS CLI configured with appropriate credentials
- Existing AWS resources that need to be imported

## Directory Structure

```
terraform/
├── main.tf           # Main infrastructure configuration
├── variables.tf      # Input variables
├── outputs.tf        # Output values
├── providers.tf      # Provider configuration
├── backend.tf        # State backend configuration
└── environments/
    ├── dev/          # Development environment
    └── prod/         # Production environment
```

## Getting Started

### 1. Initialize Terraform

```bash
cd terraform
terraform init
```

### 2. Import Existing Resources

List your existing AWS resources and import them:

```bash
# Example: Import S3 bucket
terraform import aws_s3_bucket.website your-bucket-name

# Example: Import CloudFront distribution
terraform import aws_cloudfront_distribution.cdn E1234567890ABC
```

### 3. Plan Changes

```bash
terraform plan
```

### 4. Apply Changes

```bash
terraform apply
```

## Import Workflow

1. **Document existing resources** - List all AWS resources you've created manually
2. **Write Terraform config** - Create `.tf` files matching your existing setup
3. **Import resources** - Use `terraform import` to bring them under Terraform management
4. **Verify state** - Run `terraform plan` to ensure no changes are detected
5. **Make changes via Terraform** - From now on, modify infrastructure through Terraform

## Useful Commands

```bash
# Show current state
terraform show

# List resources in state
terraform state list

# Remove resource from state (without destroying)
terraform state rm aws_s3_bucket.example

# Refresh state from actual infrastructure
terraform refresh
```
