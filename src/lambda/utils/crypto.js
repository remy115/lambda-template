const crypto=require('crypto');
const md5=(value)=>{
  const md5=crypto.createHash('md5');
  md5.update(value);
  return md5.digest('hex');
}

const hashSha256=(str)=>{
  const hash=crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
}

const randomBytes=(size)=>{
  return new Promise((resolve,reject)=>{

    crypto.randomBytes(size,(err,buf)=>{
      if(err) {
        return reject(err);
      }
      resolve(buf);
    });
  });
}


module.exports={
  md5,
  hashSha256,
  randomBytes
}