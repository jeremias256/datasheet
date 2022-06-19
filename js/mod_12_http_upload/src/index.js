//? 139 Petición HTTP - FETCH/GET
// const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch( jokeUrl).then( resp =>{
//     resp.json().then( ({id, value}) => {
        
//         console.log(id);
//         console.log(value);

//     });
// });
//? 139 Petición HTTP - FETCH/GET

//? 140 PRO TIP chainpromise
// const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch( jokeUrl)
//     .then( resp => resp.json())
//     //! .then( resp => {return resp.json()} ) 1solo param se puede reducir
//     .then(({id, value}) => {
//         console.log(id, value);
//     });
//? 140 PRO TIP chainpromise

//? 141 centralizar las peticiones HTTP
// import { obtenerChiste } from './js/http-provider.js';

// obtenerChiste().then(console.log)
//? 141 centralizar las peticiones HTTP

//? 142 PÁGINA PARA MOSTRAR Y TRABAJAR CHISTES
// import {init} from './js/chistes-page.js';

// init();
//? 142 PÁGINA PARA MOSTRAR Y TRABAJAR CHISTES

//? 143
// import { obtenerUsuarios } from "./js/http-provider";

// obtenerUsuarios().then(console.log);
//? 143


//? 144 ejemplo
// import { init } from './js/usuarios-page';
// init(); 
//? 144 ejemplo

//? 145 146 147 CRUD
// import * as CRUD from './js/crud-provider';
// CRUD.getUsuario( 5 ).then(console.log)

// CRUD.crearUsuario({
//     name: 'Jeremías',
//     job: 'Developer web'
// }).then(console.log);

// CRUD.actualizarUsuario(3, {
//     name: 'Soledad',
//     job: 'Designer'
// }).then(console.log);

// CRUD.borrarUsuario( 3 ).then(console.log)
//? 145 146 147 CRU

//? 150 crearHTML de subida
import { init } from './js/archivos-page';
init();
//? 150 crearHTML de subida