var http = require('http');

let options = {                     
    hostname: 'localhost',
    port: '5000',
    path: '',
    method: ''
};
let arg = process.argv[2].toString();

if(arg == "sveKnjige"){
    options.path = "/"+arg;
    options.method = "GET";
    http.request(options,function(response){
        HandleResponse(response);
    }).end();
}else if(arg == "getKnjiga"){
    options.path = "/getKnjiga/?id="+process.argv[3];
    http.request(options,function(response){
        HandleResponse(response);
    }).end();
}else if(arg == "addKnjiga"){
    options.path = "/"+arg
    options.method = 'POST';
    let req = http.request(options,HandleResponse);
    req.write(JSON.stringify({id:process.argv[3],name:process.argv[4],author:process.argv[5]}));
    req.end();
}else if(arg == "postaviAutora"){
    options.path = "/"+arg;
    options.method = 'POST';
    let req = http.request(options,HandleResponse);
    req.write(JSON.stringify({name:process.argv[3],author:process.argv[4]}));
    req.end();
}else if(arg == "deleteKnjiga"){
    options.path = "/"+arg;
    options.method = 'POST';
    let req = http.request(options,HandleResponse);
    req.write(JSON.stringify({id:process.argv[3]}));
    req.end();
}else if(arg == "getKnjigaByAuthor"){
    options.path = "/getKnjigaByAuthor/?author="+process.argv[3];
    http.request(options,function(response){
        HandleResponse(response);
    }).end();
}

function HandleResponse(res){
    response = "";
    res.on("data",function(data){
        response+=data;
    });
    res.on("end",function(){
        console.log(response);
    })
}
