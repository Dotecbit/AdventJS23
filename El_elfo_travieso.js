/*
    En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
    Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
    Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

    A tener en cuenta:
    -   Siempre habrá un paso de diferencia o ninguno.
    -   La modificación puede ocurrir en cualquier lugar de la cadena.
    -   La secuencia original puede estar vacía
*/

// "For" con return. -> Complejidad: 7
function findNaughtyStep(original, modified) {
    for(let step in modified){                          // anidamiento = 1. 1 punto 
      if(modified[step] !== original[step] ?? true)     // anidamiento = 2. 1 "if" + 1 "??" + 1 andimaineto: 2 puntos
        return original.length > modified.length        // operador ternario: 1 + 2 anidamiento: 3 puntos
          ? original[step] 
          : modified[step] ;
    }
  
    return '';
  }