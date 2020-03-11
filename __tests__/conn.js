require('dotenv').config();
const axios = require('axios');

const { BASE_URL } = require('./config');

const conn = ({ extraHeaders = {}, noAuth = false } = {}) => {

  const headers = { Authorization: (process.env.AUTH_TOKEN || ''), ...extraHeaders };
  if (noAuth) {
    delete headers.Authorization;
  }
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers
  });


  return instance;
}

before(async function () {
  const { USER, PASS } = process.env;
  const { data } = await conn().post(`/login`, {
    user: USER,
    pass: PASS
  });

  process.env.AUTH_TOKEN = data.token;
  return true;
});

module.exports = {
  conn
}