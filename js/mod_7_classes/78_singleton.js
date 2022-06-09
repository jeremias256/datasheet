// Unica instancia de un objeto por mas que se 
// use la palabra new
class Singleton{

    static instancia; // defecto undefined
    nombre = '';

    constructor(nombre = ''){

        //? => a undefined
        //? => !a true
        //? => !!a false
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Spiderman');
const instancia2 = new Singleton('Hulk');
//const instancia3 = new Singleton('Ironman');

console.log(`Nombre de la instancia1 es : ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 es : ${instancia2.nombre}`);