/*
{
    "headers": {
        "Content-Type": "application/json",
        "extraHeaders": {}
    },
    "statusCode": 200,
    "body": {
        "returned1": "val1",
        "returned2": "val2"
    },
    "isBase64Encoded": false
}
*/
module.exports=(response={},res)=>{
  const {headers,statusCode,body}=response;
  res.set(headers);

  return res.status(+statusCode).json(JSON.parse(body));
}