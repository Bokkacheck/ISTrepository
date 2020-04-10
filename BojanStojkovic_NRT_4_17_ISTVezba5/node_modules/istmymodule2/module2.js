const module1 = require("istmymodule1/module1");
const lista = module1.lista;
const Knjiga = module1.Knjiga;

exports.SveKnjige = ()=>{
    return lista;
}
exports.AddKnjiga = (id,naziv,name)=>{
    lista.push(new Knjiga(id,naziv,name));
} 
exports.GetKnjiga = (id)=>{
    return lista.filter(k=>k.id == id)[0];
}
exports.PostaviAutora = (naziv,autor)=>{
    lista.forEach(k=>{
        if(k.naziv==naziv){
            k.autor = autor;
        }
    })
}
exports.DeleteKnjiga = (id)=>{
    for(let i = 0;i<lista.length;i++){
        if(lista[i].id==id){
            lista.splice(i--,1);
        }
    }
}
exports.GetKnjigaByAutor = (autor)=>{
    return lista.filter(k=>k.autor==autor);
}