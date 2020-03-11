'use strict'
const express=require('express');
const cors = require('cors');
require('dotenv').config();

const lambda=require('./lambda');
const convertRequest = require('./utils/convertRequest');
const convertResponse = require('./utils/convertResponse');

const delay = (tm) => {
  return new Promise((res,rej)=>{
    return setTimeout(()=>{
      return res(1);
    },tm);
  });
}

const port=3002;

const app=express();

app.use(cors());
app.use(express.json());


app.use(async (req,res)=>{
  const convertedReq = convertRequest(req);


  const lambdaRes = await lambda.handler(convertedReq);

  // console.log('LAMBDA FINAL RESPONSE --> ',lambdaRes);

  await delay(600);

  return convertResponse(lambdaRes,res);

});




app.listen(port,()=>{
  console.log(`AWS wrapper listening on port ${port}`);
});


/*
lambda proxy integration INPUT
{
    "resource": "Resource path",
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {String containing incoming request headers}
    "multiValueHeaders": {List of strings containing incoming request headers}
    "queryStringParameters": {query string parameters }
    "multiValueQueryStringParameters": {List of query string parameters}
    "pathParameters":  {path parameters}
    "stageVariables": {Applicable stage variables}
    "requestContext": {Request context, including authorizer-returned key-value pairs}
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}

expected output from lambda proxy integration
{
  "isBase64Encoded": true|false,
  "statusCode": httpStatusCode,
  "headers": { "headerName": "headerValue", ... },
  "multiValueHeaders": { "headerName": ["headerValue", "headerValue2", ...], ... },
  "body": "..."
}
*/