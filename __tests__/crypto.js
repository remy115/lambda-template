const crypto=require('crypto');

const {randomBytes}=require('../src/lambda/utils/crypto');

let salt;
const hashPass = async (pass)=>{
  const interactions=1000;

  const salt = await randomBytes(16);
  // if(!salt) salt = await randomBytes(16);
  
  const keylen=64;
  const digest='sha256';

  return new Promise((resolve,reject)=>{
    crypto.pbkdf2(pass,salt,interactions,keylen,digest,(err,buf)=>{
      if(err) {
        return reject(err);
      }

      resolve(buf.toString('hex'));
    });
  });
}

const hash=(str)=>{
  const hash=crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
}

// (async ()=>{
//   const hash1 = await hashPass('123');
//   const hash2 = await hashPass('123');
//   console.log('1 - ',hash1);
//   console.log('2 - ',hash2);

// })()


// const digests=crypto.getHashes();
// console.log(digests);



/*
const md5=crypto.createHash('md5');
md5.update('123');
const out=md5.digest('hex');
console.log('out',out);
*/