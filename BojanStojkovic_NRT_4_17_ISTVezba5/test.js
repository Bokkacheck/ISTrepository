const module2 = require("istmymodule2/module2");

console.log(module2.SveKnjige());
module2.AddKnjiga(6,"Knjiga1","Autor1");
console.log(module2.GetKnjiga(6));
module2.PostaviAutora("Knjiga1","Novi Autor");
console.log(module2.SveKnjige());
module2.DeleteKnjiga(3);
console.log(module2.SveKnjige());
console.log(module2.GetKnjigaByAutor("Autor2"));
