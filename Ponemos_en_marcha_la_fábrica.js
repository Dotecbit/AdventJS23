/*
  Nivel: Fácil
    En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

    Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

    Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

// Filtrar gifts con "while" -> Complejidad: 3
function manufacture(gifts, materials) {
    let index;

    return gifts.filter((gift) => {// anidamiento 1
        index = 0;
        while (index < gift.length && materials.includes(gift[++index])){}  // 2 anidamiento. 1 "while" + 1 "&&" + 1 anidamiento: 3 puntos
            return index === gift.length;
    });
}