const elMayor = (a,b) => {
    return (a>b)?a:b;
}

const tieneMembresia = (miembro) => (miembro) ? '2 dolares':'10 dolares';

console.log( elMayor(2,15));
console.log( tieneMembresia(true));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo?'Thor':'Loki',
    (()=> 'Nick Fury')(),//?funcion anonima auto invocada
    elMayor(2,15)
]

console.log({amigosArr})

const nota = 65;
