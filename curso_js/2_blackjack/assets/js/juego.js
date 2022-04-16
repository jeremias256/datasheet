/*
    2C two of clubs
    2D two of diamonds
    2H two of hearts
    2S two of spades
*/

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

// referencias del html

const btnPedir = document.querySelector('#btnPedir');
//const score = document.querySelector('#score');
const scores = document .querySelectorAll('#score'); //crea un array [small1,small2]
const divCartasJugador = document.querySelector('#jugador-cartas');

let puntosJugador = 0,
      puntosComp = 0;

// referencias del html


const crear_deck = () => {
    for(let i = 2; i <= 10; i++){
        tipos.map((tipo)=>{   
            deck.push(i + tipo);
        })
    }
    for( let tipo of tipos){
        especiales.map((especial)=>{   
            deck.push( especial + tipo);
        })
    }

    deck = _.shuffle(deck); //deck mezclado
    console.log(deck); // deck mezclado

    return deck;
}
crear_deck();

const pedir_carta = () =>{
    if(deck.length === 0){
        throw 'No hay mas cartas en el deck'
    }
    const carta = deck.pop()
    return carta;
}

const valor_carta = ( carta ) =>{
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor) ? (valor==='A' ) ? 11 : 10 : puntos = valor * 1); // if ternario anidado
}
const valor = valor_carta(pedir_carta());

//events

btnPedir.addEventListener('click', () => {
    
    const carta = pedir_carta();
    puntosJugador += valor_carta( carta );
    scores[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta);

    if( puntosJugador > 21){
        console.warn('Perdiste, te pasaste de 21');
        btnPedir.disabled = true;
    }else if( puntosJugador ===21)
            btnPedir.disabled = true;
    

});