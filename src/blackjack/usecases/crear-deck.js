import _ from 'underscore';
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un Nuevo Deck de Cartas 
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    // if(!tiposDeCarta || tiposDeCarta.length > 0) throw new Error('tiposdeCarta es oblidatorio como un arreglo de String');
    // if(!tiposEspeciales || tiposEspeciales.length > 0) throw new Error('tiposEspeciales es oblidatorio como un arreglo de String');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );

    return deck;
}