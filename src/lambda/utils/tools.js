const parseDate2Db=(dtObj)=>{
  const day=dtObj.getDate();
  const month=(dtObj.getMonth()+1);
  const year=dtObj.getFullYear();

  const hour=dtObj.getHours();
  const minutes=dtObj.getMinutes();
  const seconds=dtObj.getSeconds();

  const padLeft=(str='')=>{
    str=str+'';
    while(str.length < 2) {
      str='0'+str;
    }
    return str;
  }
  return year+'-'+padLeft(month)+'-'+padLeft(day)+' '+padLeft(hour)+':'+padLeft(minutes)+':'+padLeft(seconds);
}


const calcDaystoDate=(dtObj,days=15)=>{
  days = days*86400*1000;
  return new Date((+dtObj+days));
}


const flatArray=(array, retArray) => {
  array.forEach(elem=>{
    if(Array.isArray(elem)) {
      flatArray(elem,retArray);
    } else {
      retArray.push(elem);
    }
  });
}

module.exports={
  parseDate2Db,
  calcDaystoDate,
  flatArray
}
