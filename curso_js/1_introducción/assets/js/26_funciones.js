function sumar (a ,b ){
    return a + b;
}

const sumar2 = (a,b) => {
    
    return a + b;
}
//!SI EL ARROW FUNCTION ES DE UNA LINEA PUEDE
//!const sumar2 = (a,b) => a + b;

function saludar( nombre ){
    
    console.log(`Hola ${nombre}`);
    console.log(arguments);
    return 1;
    //!SI SE QUITA RETURN => RETORNA UNDEFINED

}

const saludar2 = function ( nombre ){
    
    console.log(`Hola ${nombre}`);

}

const saludarFlecha = () => {
    
    console.log(`Hola flecha`);

}

const saludarFlecha2 = (nombre) => {
    console.log(`Hola ${nombre}`);
}

const informacion = saludar (`Fernando`, 40, true, `Costa Rica`);
console.log({informacion});

function getAleatorio(){
    
    return Math.random();

}

const getAleatorio2 = () => Math.random;

console.log(getAleatorio2());

saludar2(`Fernando saludar2`);

saludarFlecha(`Claudio saludarFlecha`);

saludarFlecha2(`Melissa saludarFlecha2`);

console.log(`Sumar: ${sumar (1,2)}`);
console.log(`Sumar2: ${sumar2(8,8)}`);