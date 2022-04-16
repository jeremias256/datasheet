
const arr = new Array();

const arr2 = [];

console.log(arr);
console.log(arr2);

let juegos = ['league', 'projectZomboid', 'warcraft3', 'hearstone'];

console.log('Largo del array: ', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1]; //5 - 1 = pos 4 

juegos.forEach( (elemento, indice, arr) => { //muestra el array
    console.log({ elemento, indice , arr});
})

let nuevaLongitud = juegos.push('dota2'); //agrega el elemento al final y devuelve el length
console.log(nuevaLongitud); //5
console.log(juegos);

nuevaLongitud = juegos.unshift( 'teamfortress');
console.log(nuevaLongitud); //6
console.log(juegos);

let juegoBorrado = juegos.pop(); //elimina el ultimo y lo devuelve
console.log(juegoBorrado); //devuelve dota2
    //alternativa .shift elimina y retorna el primero

let pos = 1;
let juegosBorrados = juegos.splice( pos, 3);
console.log(juegosBorrados); //devuelve un nuevo elemento o array con los borrados

let projectIndex = juegos.indexOf('projectZomboid'); //CaseSensItIvE 
console.log(projectIndex); // devuelve la posición

let dia = 4;
horaApertura = ([0,6].includes(dia)) ? 9:11;
