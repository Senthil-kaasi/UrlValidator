function makeHttpRequestUrl(domain,path,method,body){
    let url = "https://";
    if(method === "GET"){
        let paths = path.split(" ");
        url+=`${domain}`;
        paths.forEach((item)=>{
            url+=`/${item}`;
        });
        let keys = Object.keys(body);
        if(keys.length !== 0){
            url+="?";
            keys.forEach((key,i)=>{
                url+=`${key}=${body[key]}${i !== keys.length-1 ? "&":""}`;
            })
        }
    }else if(method === "POST" || method === "PUT" || method === "DELETE"){
        let keys = Object.keys(body);
        if(keys.length === 0){
            url="Enter a body";
        }else{
            let paths = path.split(" ");
            url+=`${domain}`;
            paths.forEach((item)=>{
                url+=`/${item}`;
            });
        }
    }
    return url;
}

export {makeHttpRequestUrl};