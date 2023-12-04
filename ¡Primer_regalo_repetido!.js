/*
  Nivel: Fácil
    En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
    Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
    ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

    En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

    ¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.
*/

//  Usando "for" y un "return". ->  Complejidad: 3
function findFirstRepeated(gifts) {
    //  Set es un objeto estándar en JavaScript para almacenar valores únicos
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    let repeatedIds = new Set();

    for(const id of gifts){         // anidamiento = 1. 1: 1 punto de complejidad
        if(repeatedIds.has(id))     // 1 "if" + 1 "anidamiento": 2 punto de complejidad
            return id;
        repeatedIds.add(id);
    }

    return -1;
}

//  Usando "while" con "return". -> Complejidad: 3
function findFirstRepeated(gifts) {
    let repeatedIds = new Set();
    let i = 0;

    while(i < gifts.length){            // anidamiento = 1. 1 punto de complejidad
        if(repeatedIds.has(gifts[i]))   // 1 "if" + 1 "anidamiento": 2 punto de complejidad
            return gifts[i];
        repeatedIds.add(gifts[i]);
        i++;
    }

    return -1;
}

//  Usando "while" sin "return": Algortimo clásico con una única salida
//  -> Complejidad: 4
function findFirstRepeated(gifts) {
    let repeatedIds = new Set();
    let i = 0;
    let result = -1;
  
    while(i < gifts.length && result === -1){  // anidamiento = 1. 1 "while" + 1 "&&" : 2 puntos de complejidad
      if(repeatedIds.has(gifts[i]))            // 1 anidamiento + 1 if: 2 puntos de comlejidad
          result = gifts[i];
      repeatedIds.add(gifts[i]);
      i++;
    }
  
    return result;
}