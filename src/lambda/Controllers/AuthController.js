'use strict'
const parseRes = require('../utils/parseResponse');
const { createToken } = require('../utils/auth');
const authService = require('../services/authService');
module.exports = {
  doLogin: async ({data}) => {
    let { user, pass } = data;
    let status=200, ret;



    const dbData = await authService.doLogin({user, pass});
    if(!dbData.length) {
      ret={message: 'Usuário ou senha inválidos!'}
      status=401;
    } else {
      ret={...dbData[0]}

      const token=createToken(ret);
      ret.token=token;
      
    }
    return parseRes({statusCode: status, body: ret });
  }
}