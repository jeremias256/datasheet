//import { buscarHeroe } from './js/123_callback_base.js';
//import { buscarHeroe } from './js/124_arg_callback.js';
//import { buscarHeroe, buscarHeroeCallback } from './js/125_callback_hell.js';
//import { buscarHeroe} from './js/126_promesas.js';
//import { promesaLenta, promesaMedia, promesaRapida } from './js/129_promise_race.js';
//import { buscarHeroe, buscarHeroeAsync } from './js/130_async.js';
//import { obtenerHeroesArr  } from "./js/131_await";
//import { obtenerHeroeAwait  } from "./js/133_await_err";
import { heroesCiclo, heroeIfAwait } from "./js/134_await_for_if";

const heroeId1 = 'capi';
const heroeId2 = 'spider';


//? 123
// buscarHeroe( heroeId1, (heroe) => {
//     console.log(heroe);
// } )
//? 123


//? 124
// buscarHeroe( heroeId1 , (err, heroe) => {
//     if (err){
//         console.error(err);
//     }else{
//         console.info(heroe);
//     }
// })
//? 124


//? 125
// buscarHeroe( heroeId1, (err, heroe1) => {
//     if (err){ return console.error(err);}
    
//     buscarHeroe( heroeId2, (err, heroe2) => {
//         if (err){ return console.error(err);}

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });
//! SOLUCIÓN USO DE PROMESAS
//? 125


//? 126 PROMESAS
// buscarHeroe( heroeId1 )
//     .then(heroe => {
//         console.log(`Enviando a ${heroe.nombre} a la misión`);
//     })
//? 126 PROMESAS


//? 127 128 PROMISE.ALL
//! Promesa hell no
// // buscarHeroe( heroeId1 ).then( heroe1 => {
// //     //console.log(`Enviando a ${heroe.nombre} a la misión`);

// //     buscarHeroe( heroeId2 ).then( heroe2 => {
// //         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
// //     })    
// // })

// Promise.all([true, 'hola', 123]).then(arr => {
//     console.log('Promise.all', arr);
// })

// Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
//     //.then(heroes => {
//     .then(([heroe1, heroe2]) => {
//     console.log('Promise.all');
//     //console.log(`Enviando a ${ heroes[0].nombre} y ${heroes[1].nombre} a la misión`);
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
// }).catch( err => {
//     alert(err);
// })
// .finally( () => {
//     console.log('Se termino Promise.all');
// })

//! Si algo falla no se ejecuta .all debe funcionar todo OK
//? 127 128 PROMISE.ALL


//? 129 Promise.race
// promesaLenta.then( console.log );
// promesaMedia.then( mensaje => console.log(mensaje) );
// promesaRapida.then( console.log );

// Promise.race( [ promesaLenta, promesaMedia, promesaRapida] )
//     .then( console.log )
//     .catch( console.warn)
//! Si alguna da error ignora solo muestra la mas rapida
//? 129 Promise.race

//? 130 ASYNC
// buscarHeroe( heroeId1 )
//     .then(console.log)
//     .catch(console.warn)

// buscarHeroeAsync( heroeId2 )
//     .then(console.log)
//     .catch(console.warn)
//? 130 ASYNC

//? 131 await
// console.time('await');
//     obtenerHeroesArr().then( heroes => {
//         console.table(heroes);
//         console.timeEnd('await');
//     });
//? 131 await


//? 133 await-error
// console.time('await');
//     obtenerHeroeAwait()
//         .then( heroes => {
//             console.table(heroes);
//             console.timeEnd('await');
//         });
//? 133 await-error


//? 134 for-if await
heroesCiclo();
heroeIfAwait('capi');
//? 134 for-if await

console.log('Fin de programa');