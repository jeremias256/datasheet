import { buscarHeroeAsync } from './130_async.js';

const heroesIds = ['capi','iron','spider']; 

export const obtenerHeroeAwait = async (id) => {
    
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;

    }catch(err){
        console.log('CATCH!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
    
}