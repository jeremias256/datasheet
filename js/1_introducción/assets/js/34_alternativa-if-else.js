let hoy = new Date();
let dia = hoy.getDay();
let semana = {
    0 : 'domingo', //?()=> 'domingo - cosas'
    1 : 'lunes',
    2 : 'martes',
    3 : 'miércoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'sábado'
};

console.log(semana[dia]); //?semana[dia]()