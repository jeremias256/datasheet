import { buscarHeroeAsync, buscarHeroe } from './130_async.js';

const heroesIds = ['capi','iron','spider']; 
const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );
// MODOSIMPLE const heroesPromesas = heroesIds.map( buscarHeroe );


export const heroesCiclo = async () => {

    console.time('HeroesCiclo');

    //? OK
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe));
    //console.log(heroes);

    for await ( const heroe of heroesPromesas){
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');

}

export const heroeIfAwait = async (id) => {

    if( (await buscarHeroeAsync(id)) === 'Ironman'){
        console.log('Es el mejor de todos');
    }else{
        console.log('NAAAAA spidey es mejor');
    }
}
