'use strict';
// const parseResp = require('./utils/parseResponse');
const routeMap = require('./utils/routes');



exports.handler = async (event) => {
  const { httpMethod, path, headers } = event;
  // console.log('event on LAMBDA!', event);
  let data,params;
  try {
    data = event.body ? JSON.parse(event.body) : null;
  } catch(e) {
    throw new Error(`Invalid JSON data in (event.body)${JSON.stringify(event.body)}`);
  }

  try {

    params = event.queryStringParameters ? JSON.parse(event.queryStringParameters) : null;
  } catch(e) {
    params = event.queryStringParameters
    // throw new Error(`Invalid JSON data in (event.queryStringParameters)${JSON.stringify(event.queryStringParameters)}`);
  }

  const handler = routeMap({headers, path, method: httpMethod });

  const ret = await handler({data,params});
  return ret;
}