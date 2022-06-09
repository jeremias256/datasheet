const regresaTrue = () => {
    console.log('paso por la función REGRESA TRUE');
    return true;
}

const regresaFalse = () => {
    console.log('paso por la función REGRESA FALSE');
    return false;
}

console.warn('------------- Not o la negación -------------');
console.log(true); // true
console.log(!true); //false
console.log(!false);
console.log(!regresaFalse());

console.warn('And');
console.log(true || false);

console.warn('------------- Prueba de and -------------');
console.log( regresaFalse() && regresaTrue());
console.log('La primera función ya regresa false entonces no verifica la segunda.')