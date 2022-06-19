import {buscarHeroeAsync, buscarHeroe} from './130_async';

const heroesIds = ['capi','iron','spider']; 

export const obtenerHeroesArr = async () => {
    const heroesArr = [];
    
    // // for(const id of heroesIds){
    //! EVITAR AWAIT CON FOR
    // //     const heroe = await buscarHeroe(id);
    // //     heroesArr.push(heroe);
    // // }
    //! MAL
    // // setTimeout( ()=>{
    // //     console.log('ObtenerHeroes');
    // //     console.table( heroesArr );
    // // }, 1000);
    
    //*PROTIP
    for(const id of heroesIds){
        heroesArr.push(buscarHeroe(id));
    }
    return await Promise.all(heroesIds.map( buscarHeroe ));

}