/*
    Nivel: Fácil
    Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.
    Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

    > = Avanza a la derecha
    < = Avanza a la izquierda
    * = Puede avanzar o retroceder
    Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

    Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.
    En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.
    Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:

    Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.
*/

//  Función con "for" e "if-else"
// Complejidad: 8
function maxDistance(movements) {
    let both = 0;
    let result = 0;
    for(let move of movements){             // anidamiento = 1. 1 "for": 1 punto
      if(move !== '*')                      // anidaminento = 2. 1 anidamiento + 1 "if" + 1 "else": 3 punto
        result += move === '>' ? 1 : -1;    // 2 anidamiento + 1 "ternary operator": 3 punto
      else
        both++;
    }
  
    return result >= 0 ? result + both : -result + both; // 1 "ternary operator": 3 punto
  }