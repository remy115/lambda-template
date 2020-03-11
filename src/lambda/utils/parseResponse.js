'use strict'
module.exports=({
  extraHeaders={},
  body={},
  error='',
  statusCode=200,
  isBase64Encoded=false
})=>{

  let headers={
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
  headers={...headers,...extraHeaders}

  let res;
  if(!error) {
    res=JSON.stringify(body);
  } else {
    res=JSON.stringify({message:error});
  }

  return {
    headers,
    statusCode,
    body:res,
    isBase64Encoded
  }
}