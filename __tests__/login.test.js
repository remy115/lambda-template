const assert=require('assert').strict;
const axios = require('axios');

const {BASE_URL} = require('./config');

describe('######## LOGIN ########',function() {
  it('make login process', async function() {
    let status,data;
    try {

      await axios.post(`${BASE_URL}/login`,{
        user:'dummy',
        pass:'wrongpass'
      });
    } catch(e) {
      const {response}=e;
      status=response.status;
      data=response.data;
    }
    assert(status === 401);
    assert.deepStrictEqual(data,{ message: 'Usuário ou senha inválidos!' });
  });
});