const elMayor = (a,b) => { (a>b) ? a : b;} //unico return, se puede omitir

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

const nota = 95; //? A+ A B+ ...
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' :'F';

console.log({nota, grado});
