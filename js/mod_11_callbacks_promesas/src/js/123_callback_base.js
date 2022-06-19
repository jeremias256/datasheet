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

//? Callback retorna ...
export const buscarHeroe = ( id, callback) => {

    const heroe = heroes[id];

    callback(heroe);
}
