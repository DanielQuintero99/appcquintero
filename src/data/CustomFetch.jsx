let isOk=true;

const CustomFetch = (time,array)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       if(isOk){
         resolve(array)
       }else{
            reject("error")
         }
      },time)
  })}
  export default CustomFetch;