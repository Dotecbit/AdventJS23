/*
    Nivel: Medio

    En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.
    Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.
    Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

    Si ya es un palíndromo, un array vacío.
    Si no es posible, null.
    Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
    Por ejemplo:

    Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.
*/

console.log(getIndexsForPalindrome("abab")); // [1,3]

//Primera aproximación con split().slice() --> Muy ineficiente
function getIndexsForPalindrome(word) {
  let i = 0;
  let j = 0;
  let transformed = word.split("");
  let result;

  while (
    i < word.length &&
    transformed
      .slice(0, Math.floor(word.length / 2))
      .reverse()
      .join() !==
      transformed.slice(Math.round(word.length / 2), word.length).join()
  ) {
    if (j === word.length) {
      i++;
      j = i + 1;
    } else j++;
    transformed = word.split("");
    transformed.splice(i, 1, transformed.splice(j, 1, word[i])[0]);
  }
  result = i > 0 || j > 0 ? [i, j] : [];

  return i === word.length ? null : result;
}

//Utilizando índices
// Más eficiente
// Complejidad: 20
function getIndexsForPalindrome(word) {
  let i = 0;
  let j = 0;
  let k = 0;
  let kWord = "";
  let l = word.length-1;
  let lWord = "";
  let isPalindrom = false;
  let areEqual = true;
  let result;

  while (i < word.length && !isPalindrom) {             // 2 punto

    kWord = word[k];
    lWord = word[l];
    if (k === j) kWord = word[i];                       // 2 punto
    if (k === i) kWord = word[j];                       // 2 punto
    if (l === j) lWord = word[i];                       // 2 punto
    if (l === i) lWord = word[j];                       // 2 punto

    areEqual &&= kWord === lWord;
    k++;
    l--;
    if (k >= l) {                                       // 2 puntos
      k = 0;
      l = word.length-1;
      isPalindrom = areEqual;
      areEqual = true;
      if(!isPalindrom)                                  // 3 puntos
        if (j === word.length ) {                       // 5 puntos
          i++;
          j = i + 1;
        } else j++;
    }
  }
  result = i > 0 || j > 0 ? [i, j] : [];                // 1 puntos

  return i === word.length ? null : result;             // 1 puntos
}

//Con índices y switch. Menor complejidad teórica
// Complejidad: 17
function getIndexsForPalindrome(word) {
  let i = 0;
  let j = 0;
  let k = 0;
  let l = word.length-1;
  let kWord = "";
  let lWord = "";
  let areEqual = true;
  let result;

  while (i < word.length) {                       // 1 punto

    kWord = word[k];
    lWord = word[l];
    switch(k){                                    // 3 puntos
      case i:
        kWord = word[j];
        break;
      case j:
        kWord = word[i];
    }
    switch(l){                                    // 3 puntos
      case i:
        lWord = word[j];
        break;
      case j:
        lWord = word[i];
    }

    areEqual &&= kWord === lWord;
    k++;
    l--;
    if (k >= l) {                                    // 2 puntos
      k = 0;
      l = word.length-1;
      if(areEqual)                                    // 3 puntos
        break;
      areEqual = true;
      if (j === word.length ) {                                    // 3 puntos
        i++;
        j = i + 1;
      } else j++;
    }
  }
  result = i > 0 || j > 0 ? [i, j] : [];                                    // 1 puntos

  return i === word.length ? null : result;                                    // 1 puntos
}
