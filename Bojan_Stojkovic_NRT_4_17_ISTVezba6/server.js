const ModulKnjiga = require("istmymodule2/module2") //Modul sa prosle vezbe uz modifikaciju za rad sa fajlom
const http = require("http");
var url = require("url");

ModulKnjiga.SetStorage("knjige.json");    

let server = http.createServer(function (req, res) {
    console.log("Client make request -> "+url.parse(req.url, true).pathname);
    if(req.method=="POST"){
        HandlePost(req,res);
    }else if(req.method=="GET"){
        GetRouteSwitch(req,res)
    }
}).listen(5000);

function HandlePost(req,res){
    let body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        let data = JSON.parse(body);
        let response = PostRouteSwitch(req.url,data);       //Routes switch
        res.write(response);
        res.end();
    });
}
function PostRouteSwitch(reqUrl,data){
    let q = url.parse(reqUrl);
    switch(q.pathname){
        case "/addKnjiga":
            ModulKnjiga.AddKnjiga(data.id,data.name,data.author);
            return "Book Added!";
        case "/postaviAutora":
            ModulKnjiga.PostaviAutora(data.name,data.author);
            return "Author setted";
        case "/deleteKnjiga":
            ModulKnjiga.DeleteKnjiga(data.id);
            return "Book deleted";
        default:
            return "Wrong route";
    }
}
function GetRouteSwitch(req,res){
    let q = url.parse(req.url,true);
    res.writeHead(200);
    switch(q.pathname){
        case "/sveKnjige":
            res.end(JSON.stringify(ModulKnjiga.SveKnjige()));
            break;
        case "/getKnjiga/":
            res.end(JSON.stringify(ModulKnjiga.GetKnjiga(q.query.id)));
            break;
        case "/getKnjigaByAuthor/":
            res.end(JSON.stringify(ModulKnjiga.GetKnjigaByAutor(q.query.author)));
            break;
        default:
            return "Wrong route";
    }
}

