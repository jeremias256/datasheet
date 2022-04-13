let a = 5;
let b = 9;

if (a > 10 )
    console.log('a es mayor a 10');


if (b < 10){ //undeifned, null, una asignación
    console.log('b es menor a 10');
} else{
    console.log('b es mayor a 10');
}

const hoy = new Date();
console.log(hoy); //0=domingo, 1=lunes, 2=martes....

let dia = hoy.getDay();
console.log({dia});

if (dia === 0){
    console.log('Hoy es domingo');
} else{
    console.log('No es domingo');
}