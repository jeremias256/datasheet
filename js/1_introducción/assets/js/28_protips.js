
function crearPersona( nombre, apellido ){
    return {
        // nombre: nombre,
        // apellido: apellido

        // nombre,
        // apellido

        nombre, apellido
    }
}

const crearPersonaFlecha = (nombre, apellido) => ({nombre,apellido});
const personaFlecha = crearPersonaFlecha( 'JeremíasFlecha', 'MenachoFlecha');
console.log(personaFlecha);

const persona = crearPersona( 'Jeremías', 'Menacho');
console.log( persona );

//ARGUMENTOS
function imprimeArgumentos() {
    console.log( arguments );
}

//ARGUMENTOS CON ARROW FUNCTION (no funciona)
// const imprimeArgumentos2 = () => {
//     console.log( arguments );
// }

// imprimerArgumentos2(10, true, false, 'Jere', 'Hola');

//ARGUMENTOS CON DESESTRUCTURACIÓN
const imprimeArgumentos3 = (edad, ...args) => {
    //console.log( {edad, args});
    return args;
}
const argumentos = imprimeArgumentos3(10, true, false, 'Jere', 'Hola');
console.log(argumentos);

//ETIQUETAR ELEMENTOS DE ARRAY
const [casado, vivo, nombre, saludo ] = imprimeArgumentos3(10, true, false, 'Jere', 'Hola');
console.log({casado, vivo, nombre, saludo});


//
const { apellido: nuevoApellido } = crearPersona('Jere', 'Menacho');
console.log({nuevoApellido});

//DESESTRUCTURACIÓN
let tony = {
    nombre: 'Tony Stark',
    heroName: 'Ironman',
    vivo: false,
    edad:40,
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
};
// const imprimePropiedades = ( personaje ) => { 
//     console.log('nombre',personaje.nombre);
//     console.log('heroName',personaje.heroName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
// }
    const imprimePropiedades = ( nombre, heroName, vivo, edad=15, trajes ) => {
        //si edad no existe pone 15 por defecto
        //edad = edad || 0;

        console.log({nombre});
        console.log({heroName});
        console.log({vivo});
        console.log({edad});
        console.log({trajes});
    }