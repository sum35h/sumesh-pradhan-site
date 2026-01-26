#!/bin/bash
# Import existing AWS resources into Terraform state

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Terraform Import Script ===${NC}"
echo "This script will help you import existing AWS resources into Terraform state"
echo ""

# Check if AWS CLI is configured
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    exit 1
fi

# Prompt for resource information
echo -e "${YELLOW}Please provide the following information:${NC}"
echo ""

read -p "S3 bucket name: " BUCKET_NAME
read -p "CloudFront distribution ID: " CF_DIST_ID
read -p "ACM certificate ARN: " ACM_CERT_ARN
read -p "Route53 hosted zone ID (optional, press enter to skip): " HOSTED_ZONE_ID

# Initialize Terraform if not already done
if [ ! -d ".terraform" ]; then
    echo -e "${YELLOW}Initializing Terraform...${NC}"
    terraform init
fi

# Import S3 bucket
echo -e "${YELLOW}Importing S3 bucket...${NC}"
terraform import aws_s3_bucket.website "$BUCKET_NAME"

# Import S3 bucket website configuration
echo -e "${YELLOW}Importing S3 website configuration...${NC}"
terraform import aws_s3_bucket_website_configuration.website "$BUCKET_NAME"

# Import S3 public access block
echo -e "${YELLOW}Importing S3 public access block...${NC}"
terraform import aws_s3_bucket_public_access_block.website "$BUCKET_NAME"

# Import S3 bucket versioning
echo -e "${YELLOW}Importing S3 bucket versioning...${NC}"
terraform import aws_s3_bucket_versioning.website "$BUCKET_NAME"

# Import CloudFront distribution
echo -e "${YELLOW}Importing CloudFront distribution...${NC}"
terraform import aws_cloudfront_distribution.cdn "$CF_DIST_ID"

# Import ACM certificate
echo -e "${YELLOW}Importing ACM certificate...${NC}"
terraform import aws_acm_certificate.cert "$ACM_CERT_ARN"

# Import Route53 records if provided
if [ ! -z "$HOSTED_ZONE_ID" ]; then
    echo -e "${YELLOW}Importing Route53 hosted zone...${NC}"
    # You'll need to manually import specific records
    echo -e "${YELLOW}Note: Route53 records need to be imported manually${NC}"
    echo "Example: terraform import aws_route53_record.website ${HOSTED_ZONE_ID}_sumeshpradhan.com_A"
fi

echo ""
echo -e "${GREEN}Import complete!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Update terraform/variables.tf with your actual values"
echo "2. Run 'terraform plan' to verify the configuration matches your infrastructure"
echo "3. If there are differences, update the Terraform configuration to match"
echo "4. Once 'terraform plan' shows no changes, your infrastructure is fully managed by Terraform"
