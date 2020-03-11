#!/bin/bash
cd src/lambda
zip -r ./lambda.zip .
aws --region sa-east-1 lambda update-function-code --function-name <LAMBDA_NAME> --zip-file fileb://lambda.zip
