const fer = {
    nombre: 'Fernando',
    edad: 31,
    imprimir(){
        console.log(`Nombre: ${this.nombre} edad: ${this.edad}`);
    }
}

fer.imprimir()

// funcion P mayus para crear INSTANCIAS
function Persona(nombre,edad){
    console.log('Se ejecuto la función Persona');
    this.nombre = nombre;
    this.edad   = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} edad: ${this.edad}`);
    }
}

const ana = new Persona('Ana',24);
const melisa = new Persona('Melisa','45');

console.log(ana)
ana.imprimir()
melisa.imprimir()