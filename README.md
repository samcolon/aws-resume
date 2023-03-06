# aws-resume
Custom domain name is hosted on Cloudflare. Resume site (https) is setup with SSL certificate in CloudFront. This project was created on a Windows 11 laptop using Visual Studio Code.

## Software that was used for this project:
- Visual Studio Code
- Visual Studio Code Extension: AWS Toolkit
- Visual Studio Code Extension: AWS boto3
- LucidChart

## First Steps:
- Frontend folder contains the website.
- script.js contains visitor counter code.
- Purchased Domain on CloudFlare
- Created S3 Bucket.
- Created and configured CloudFront distrubution.
- Created SSL/TLS certificate in Amazon Certificate Manager.

## Second Steps:
- Created DynamoDB table.
- Created Lambda Function.
- Created API Gateway.
- Updated JavaScript in index.html.
- Created Script.js (contains api url)

## Third Steps:
- Built a GitHub CI/CD pipeline for easy website updating.
- Created CodePipeline in AWS
- Connected CodePipeline to GitHub repo.
- Changes will now be made in VSCode which gets commited to GitHub which triggers the workflow to Codepipeline and uploads changed files to S3 bucket.






