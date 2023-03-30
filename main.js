class ropa {
    constructor (marca, talle){
        this.marca = marca;
        this.talle = talle;
        
    }
}

let remera = new ropa ('Nike', 'L');
let remera2 = new ropa ('Adidas', 'M');
let short = new ropa ('Jordan', 'L');
let short2 = new ropa ('Adidas', 'M');

descripcion = function (){
    console.log ('Ropa' + this.short + 'short' + this.marca + 'marca' + this.talle + 'talle:')
}