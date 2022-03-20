let personaje = {   //si el objeto no va a modificarse uso const PERO SI AÑADEN O RETIRAN SUS PROPS
    nombre: 'Tony Stark',
    heroName: 'Ironman',
    vivo: false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity war' //parametro con guion
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords.lat);

let num = personaje.trajes.length;
console.log('Número de trajes:', num);

let ultimoTraje = personaje.trajes.pop();
console.log('Ultimo traje: ', ultimoTraje);

console.log('Ultima película', personaje['ultima-pelicula']);

//BORRAR UNA PROPIEDAD
delete personaje.edad;
console.log(personaje);

//AGREGAR UNA NUEVA PROPIEDAD
personaje.casado = true;

//MOSTRAR OBJETO COMO UN ARRAY
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

//BLOQUEAR PROPIEDADES
Object.freeze( personaje );
personaje.casado = false;
personaje.dinero = 100000;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values ( personaje );
console.log({propiedades, valores});