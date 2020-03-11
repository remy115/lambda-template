'use strict'
const parseRes = require('./parseResponse');
const { verifyToken } = require('./auth');
const {
  AuthController,
} = require('../Controllers');



const LOGIN = '/login';



const routeMap = ({ path = '', method, headers }) => {
  path = path.replace('/api', '');

  const authorization = headers.authorization || headers.Authorization;

  // LOGIN
  if (method === 'POST' && path === LOGIN) {
    return AuthController.doLogin;
  }

  
  // ################################## Authed routes
  const token = authorization ? verifyToken(authorization) : null;
  if (!token) {
    return () => parseRes({ statusCode: 401, body: { message: 'Sessão expirada!' } });
  }

}


module.exports = routeMap;