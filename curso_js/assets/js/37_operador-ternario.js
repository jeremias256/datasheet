/** 
 * Dìas de semana brimos a las 11,
 * pero los ifnes de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si está abierto hoy ...

const dia = 6; // 0:domingo, 1:lunes, 2:martes...
const horaActual = 11;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las x

//! SIN OPERADOR  TERNARIO
//if( dia === 0 || dia === 6){
// if( [0,6].includes(dia)){   //array.include(dia) => true/false
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

//* OPERADOR TERNARIO

horaApertura = ([0,6].includes(dia)) ? 9:11;

// if( horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// } else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

//* OPERADOR TERNARIO

mensaje = (horaActual>= horaApertura) ? 'Esta abierto ternario':'Esta cerado ternario';

console.log({ horaApertura });
console.log({ mensaje });