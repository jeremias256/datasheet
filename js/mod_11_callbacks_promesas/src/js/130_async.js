
const heroes = {
    capi:{
        nombre : 'Capitán América',
        poder : 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre : 'Ironman',
        poder : 'Absurda cantidad de dinero'
    },
    spider:{
        nombre : 'Spiderman',
        poder : 'La mejor reacción alergica'
    }
}

export const buscarHeroe = ( id ) =>  {

    const heroe = heroes[id];
    
    //const promesa = new Promise();
    return new Promise( ( resolve, reject)=>{

        if(heroe){ 
            //* protip
            setTimeout(()=>{
                resolve( heroe );
            },1000);
        }else{
            reject(`No existe un héroe con el id: ${id}`)
        }
    } );
}

export const buscarHeroeAsync = async ( id ) =>  {

    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }else{
        throw Error(`No existe un héroe con el id: ${id}`);
    }
}