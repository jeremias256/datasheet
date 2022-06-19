
const promesaLenta = new Promise( (resolve, reject) => {
    setTimeout( () => resolve ('Promesa Lenta'), 2000);

});

const promesaMedia = new Promise( (resolve, reject) => {
    setTimeout( () => resolve ('Promesa Media'), 1500);
    
});

const promesaRapida = new Promise( (resolve, reject) => {
    setTimeout( () => resolve ('Promesa Rapida'), 1000); //!reject da error
    
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}