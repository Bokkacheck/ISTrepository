class Knjiga{
    constructor(id,naziv,autor){
        this.id = id;
        this.naziv = naziv;
        this.autor = autor;
    }
    Ispis() {
        console.log(this.id + " " + this.naziv+" "+this.autor);
    }
};
exports.Knjiga = Knjiga;
exports.lista = [new Knjiga(1,"Knjiga1","Autor1"),new Knjiga(2,"Knjiga2","Autor2"),
                 new Knjiga(3,"Knjiga3","Autor3"),new Knjiga(4,"Knjiga4","Autor2"),new Knjiga(5,"Knjiga5","Autor1")]
    