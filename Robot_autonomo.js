/*
    Nivel: Medio
    Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

    Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

    El almacén se representa como un array de cadenas de texto, donde:

    . significa que hay vía libre.
    * significa que hay un obstáculo.
    ! es la posición inicial del robot.
    Los movimientos son un array de cadenas de texto, donde:

    R mueve al robot una posición a la derecha.
    L mueve al robot una posición a la izquierda.
    U mueve al robot una posición hacia arriba.
    D mueve al robot una posición hacia abajo.
    Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

    Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

    El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.
    Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

    También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.
*/

console.log(autonomousDrive(["***", ".!.", "***"], ["D", "U", "R", "R", "R"]));

// //Primera aproximación
// // Complejidad: 7
// function autonomousDrive(store, movements) {
//   let cRow;
//   let cCol;
//   let nexRow;
//   let newCol;
//   let index = 0;

//   while (store[index].indexOf("!") === -1) index++;

//   [cRow, cCol] = [index, store[index].indexOf("!")];

//   if (movements.length > 0) store[cRow] = store[cRow].replace("!", ".");
//   else return store;

//   movements.forEach((movement) => {
//     switch (movement) {
//       case "R":
//         newCol = cCol + 1;
//         break;
//       case "L":
//         newCol = cCol - 1;
//         break;
//       case "U":
//         nexRow = cRow - 1;
//         break;
//       case "D":
//         nexRow = cRow + 1;
//         break;
//     }

//     nexRow ??= cRow;
//     newCol ??= cCol;

//     if (store[nexRow]?.[newCol] === ".") {
//       cCol = newCol;
//       cRow = nexRow;
//     }
//     nexRow = undefined;
//     newCol = undefined;
//   });

//   store[cRow] =
//     store[cRow].substring(0, cCol) + "!" + store[cRow].substring(cCol + 1);

//   return store;
// }

// // Se sustituye siempre, evitando if-else (más eficiente)
// // Complejidad: 5
// function autonomousDrive(store, movements) {
//   let cRow;
//   let cCol;
//   let nexRow;
//   let newCol;
//   let index = 0;

//   while (store[index].indexOf("!") === -1) index++;

//   [cRow, cCol] = [index, store[index].indexOf("!")];

//   store[cRow] = store[cRow].replace("!", ".");

//   movements.forEach((movement) => {
//     switch (movement) {
//       case "R":
//         newCol = cCol + 1;
//         break;
//       case "L":
//         newCol = cCol - 1;
//         break;
//       case "U":
//         nexRow = cRow - 1;
//         break;
//       case "D":
//         nexRow = cRow + 1;
//         break;
//     }

//     nexRow ??= cRow;
//     newCol ??= cCol;

//     if (store[nexRow]?.[newCol] === ".") {
//       cCol = newCol;
//       cRow = nexRow;
//     }
//     nexRow = undefined;
//     newCol = undefined;
//   });

//   store[cRow] =
//     store[cRow].substring(0, cCol) + "!" + store[cRow].substring(cCol + 1);

//   return store;
// }

// Se sustituye siempre, evitando if-else, evitando Switch (menos eficiente)
// Complejidad: 3
function autonomousDrive(store, movements) {
  let cRow;
  let cCol;
  let nexRow;
  let newCol;
  let index = 0;
  let dicMovements = {
    'R': [0,1],
    'L': [0,-1],
    'U': [-1,0],
    'D': [1,0]
  }

  while (store[index].indexOf("!") === -1) index++;

  [cRow, cCol] = [index, store[index].indexOf("!")];

  store[cRow] = store[cRow].replace("!", ".");

  movements.forEach((movement) => {
    [nexRow, newCol] = dicMovements[movement]

    if (store[cRow + nexRow]?.[cCol + newCol] === ".") {
      cCol = cCol + newCol;
      cRow = cRow + nexRow;
    }

  });

  store[cRow] =
    store[cRow].substring(0, cCol) + "!" + store[cRow].substring(cCol + 1);

  return store;
}

