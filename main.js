class ropa {
    constructor (remera, marca, talle){
        this.remera = remera;
        this.marca = marca;
        this.talle = talle;
    }
}

let prenda1 = new ropa ('Remera','Nike', 'L');
let prenda2 = new ropa ('Remera','Adidas', 'M');

class ropa2 {
    constructor (tipo, marca, talle){
        this.tipo = tipo;
        this.marca = marca;
        this.talle = talle;
    }
}

let prenda3 = new ropa2 ('Short','Jordan', 'L');
let prenda4 = new ropa2 ('Short','Adidas', 'M');


console.log(ropa, ropa2);


// descripcion = function (){
    
// }
// 'Ropa' + this.short + 'short' + this.marca + 'marca' + this.talle + 'talle:'