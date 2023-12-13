/*
    Nivel: Meido
    Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.
    El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.
    Los elfos tienen un sistema especial para organizar los regalos:

    Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
    Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
    Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
    Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

    Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.
*/

//  Usando Math.floor 
//  Complejidad: 13
function organizeGifts(gifts) {
    let numberAccum = '';
    let parsedNum;
    let result = '';

  for(const formatCode of gifts){                                       // anidamiento = 1. 1 punto
    parsedNum = Number.parseInt(formatCode)
    if(Number.isNaN(parsedNum)){                                        // anidamiento = 2. 3 punto
        parsedNum = Number.parseInt(numberAccum);
        result += parseInt(parsedNum/50,10) > 0                         // 3 punto
            ? `[${formatCode}]`.repeat(Math.floor(parsedNum/50)) 
            : '';
        result += Math.floor((parsedNum%50)/10) > 0                     // 3 punto
            ? `{${formatCode}}`.repeat(Math.floor((parsedNum%50)/10)) 
            : '';
        result += Math.floor(parsedNum%50%10) > 0                       // 3 punto
            ? `(${formatCode.repeat(Math.floor(parsedNum%50%10))})`
            : '';
        numberAccum = '';
    }else{
        numberAccum += formatCode;
    }
  }

  return result;
}