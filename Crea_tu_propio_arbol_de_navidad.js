/*
    Nivel: Fácil

    ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.
    Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.
    Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.
    Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

    Nota:
    El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
    Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
    Los adornos tienen un espacio en blanco entre ellos de separación.
    Si te fallan los tests y visualmente parece que el árbol está bien, comprueba que no haya espacios en blanco que sobren, especialmente a la derecha de cada línea.
*/

//Función con doble bucle for O(n^2)
// Complejidad: 3
function createChristmasTree(ornaments, height) {
    let result = [];
    let row = [];
    let ornIndex = 0;

    ornaments = ornaments.repeat(Math.round(height/ornaments.length));

    for(let i = 0; i < height; i++){                                    // anidamiento = 1. 1 punto
        row = [];
        for(let t = 0; t <= i; t++)                                     // 2 puntos
            row.push(ornaments[(ornIndex++)%ornaments.length]);
        result.push(" ".repeat(height-i-1)+row.join(" "));
        }
    return result.join('\n')+'\n'+" ".repeat(height-1)+"|"+'\n';    
  }