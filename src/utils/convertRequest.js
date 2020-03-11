// convert request to the AWS proxy integration format
/* lambda proxy integration INPUT
{
    "resource": "Resource path",
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {String containing incoming request headers}
    "multiValueHeaders": {List of strings containing incoming request headers}
    "queryStringParameters": {query string parameters }
    "multiValueQueryStringParameters": {List of query string parameters} - { query1: 'val1', query2: 'val2' }
    "pathParameters":  {path parameters}
    "stageVariables": {Applicable stage variables}
    "requestContext": {Request context, including authorizer-returned key-value pairs}
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
} */

module.exports = (req) => {
  const { body, method, path, query, headers } = req;

  return {
    path,
    headers,
    httpMethod: method,
    body: JSON.stringify(body),
    queryStringParameters: JSON.stringify(query)
  }
}