/*
    En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
    Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
    Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

    Notas:
    Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
    En el mensaje final no deben quedar paréntesis.
    El nivel máximo de anidamiento es 2.
*/

//  Función con "while"
//  Este algoritmo termina sin realizar el bucle si no se ha de revertir ningún intervalo del mensaje.
//  -> Complejidad: 1
function decode(message) {
    let result = message;
    let innerFirstReverse;
    let innerLastReverse;

    while(result.includes('(')){                                                // anidamiento 1. 1 "while": 1 punto
        innerLastReverse = result.indexOf(')');
        innerFirstReverse = result.slice(0,innerLastReverse).lastIndexOf('(')+1;

        result = 
            result.slice(0,innerFirstReverse-1)+
            result.slice(innerFirstReverse, innerLastReverse)
                .split('').reverse().join('')+
            result.slice(innerLastReverse+1)
    }

    return result;
}

//  Función con "do-while". 
//  Este algoritmo en los casos directos realiza el loop una vez, sin necesidad de ello. Es posible mejorarlo con un "while" en tal caso.
//  -> Complejidad: 1
function decode(message) {
    let result = message;
    let innerFirstReverse;
    let innerLastReverse;

    do{                                                                             // anidamiento = 1. 1 "while": 1 punto
        innerLastReverse = result.indexOf(')');
        innerFirstReverse = result.slice(0,innerLastReverse).lastIndexOf('(')+1;
    
        result = 
            result.slice(0,innerFirstReverse-1)+
            result.slice(innerFirstReverse, innerLastReverse)
                .split('').reverse().join('')+
            result.slice(innerLastReverse+1)
    }while(result.includes('('))

    return result;
}
