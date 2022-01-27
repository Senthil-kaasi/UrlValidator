function checkDomain(domain){
    let flag = false;
    domain = domain.toLowerCase();
    if(domain.includes("www.") && domain.includes(".com")){
        flag=true;
    }
    return flag;
}

function checkBody(body){
    let err = "";
    let bodyObj = null;
    if(body === ""){
        err="empty";
    }else{
        try{
            bodyObj=JSON.parse(body);
        }catch(e){
            err= "Error in the body of the query parameter";
        }
    }
    return bodyObj === null ? err : bodyObj;
}



function makeHttpRequestUrl(domain,path,method,body){
   let message = "";
   let pathArr = path.split(" ");
   if(method === "GET"){
        let bodyObj;
        if(checkDomain(domain)){
            bodyObj = checkBody(body);
            message = `https://${domain}`;
            pathArr.map((item)=>{
                message+=`/${item}`
            })
            if(typeof bodyObj === 'object'){
                message+="?"
                let objKeys = Object.keys(bodyObj);
                console.log(objKeys);
                objKeys.map((key,index)=>{
                    message+=`${key}=${bodyObj[key]}${index !== objKeys.length-1 ? "&":""}`
                })
            }else if(bodyObj!== "empty"){
                message = bodyObj;
            }
        }else{
            message = "Invalid URL! Please recheck your url";
        }
   }else if(method === "POST" || method === "PUT"){
       let bodyObj;
       if(checkDomain(domain)){
            bodyObj = checkBody(body);
            if(typeof bodyObj === 'object'){
                message = `https://${domain}`;
                pathArr.map((item)=>{
                    message+=`/${item}`
                })
            }else{
                message = "Error in the body";
            }
       }else{
            message = "Invalid URL! Please recheck your url";
       }
   }else{
       if(checkDomain(domain)){
            message = `https://${domain}`;
            pathArr.map((item)=>{
                message+=`/${item}`
            })
       }else{
            message = "Invalid URL! Please recheck your url"; 
       }
   }
   return message;
}

export {makeHttpRequestUrl};