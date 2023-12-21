/*
    Nivel: Fácil
    En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y el segundo es el final.
    Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7. El problema es que a veces los intervalos se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.
    Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados:

    Puedes asumir que el primer elemento de cada intervalo siempre es menor o igual que el segundo elemento. Pero los intervalos no están necesariamente ordenados.

    Los números de horas pueden llegar hasta la cifra 9999.
*/

//Primera aproximación
// Compejidad: 13
function optimizeIntervals(intervals) {
  let intervalsResult = [];
  let sInt = 0;
  let eInt = 0;
  let isOutOfInt;

  intervals = intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  sInt = intervals[0][0];
  eInt = intervals[0][1];

  intervals.forEach((interval) => {
    isOutOfInt = sInt > interval[1] || eInt < interval[0];
    if (!isOutOfInt) {
      sInt = sInt < interval[0] ? sInt : interval[0];
      eInt = eInt > interval[1] ? eInt : interval[1];
    } else {
      intervalsResult.push([sInt, eInt]);
      sInt = interval[0];
      eInt = interval[1];
    }
  });
  if (
    intervalsResult[intervalsResult.length - 1]?.[0] !== sInt ||
    intervalsResult[intervalsResult.length - 1]?.[1] !== eInt
  )
    intervalsResult.push([sInt, eInt]);

  return intervalsResult;
}
