'use strict'
const jwt = require('jsonwebtoken');
const {JWT_SECRET}=require('./config');
const createToken=(userData)=>{
  const {
    name,
    username,
    email,
    user_id
  } = userData;

  const tokenData = {name,username,email,user_id}
  const token = jwt.sign(tokenData, JWT_SECRET);
  return token;
}

const verifyToken=(token)=>{
  const payload=jwt.verify(token, JWT_SECRET);
  return payload;
}


module.exports={
  createToken,
  verifyToken
}