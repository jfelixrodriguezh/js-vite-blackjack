import { crearCartaHTML, pedirCarta, valorCarta  } from "./";

/**
 * turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos para que la computadora gane
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora HTML para mostrar cartas
 * @param {Array<String>} deck deck de cartas
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    // if(!puntosMinimos) throw new Error('puntosMinimos es necesario');
     if(!puntosHTML) throw new Error('puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}