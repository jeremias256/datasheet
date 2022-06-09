let a = b = 10;
a=30;
console.log({a,b})

let juan = { nombre: 'Juan'};
let ana  = juan;
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}
let peter = { nombre: 'Peter'};
let tony  = cambiaNombre( peter );

console.log({peter, tony});

//ARRAYS
const frutas = ['Manzana', 'Pera', 'Piña'];

//ROMPER RELACIÓN REFERENCIA DE LOS ARREGLOS
//CREA COPIA DEL OBJETO SIN MODIFICAR EL ORIGINAL
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});