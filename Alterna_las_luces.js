/*
    Nivel: fácil
    Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

    Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. 
    Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

    Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz 
    (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay 
    que cambiar para que estén los colores alternos.
*/

//Primera aproximación por switch e if-else
// Complejidad: 22
function adjustLights(lights) {
    let previuesColor = ['🟢','🔴'];
    let wrongColor = [
        lights[0] === '🟢'? 0 : 1,                      // 1 punto
        lights[0] === '🔴'? 0 : 1];                     // 1 punto

    for(let i = 1; i < lights.length; i++){             // anidamiento = 1. 1 punto
        switch(lights[i]){                              // anidamiento = 2. 2 punto
            case '🟢':
                if(previuesColor[0] !== '🟢'){         // 4 punto
                    wrongColor[0] += 0;
                    previuesColor[0] = '🟢';
                }else{
                    wrongColor[0] += 1
                    previuesColor[0] = '🔴';
                }
                if(previuesColor[1] !== '🟢'){          // 4 punto
                    wrongColor[1] += 0;
                    previuesColor[1] = '🟢';
                }else{
                    wrongColor[1] += 1
                    previuesColor[1] = '🔴';
                }
                break;
            case '🔴':
                if(previuesColor[0] !== '🔴'){          // 4 punto
                    wrongColor[0] += 0;
                    previuesColor[0] = '🔴';
                }else{
                    wrongColor[0] += 1
                    previuesColor[0] = '🟢';
                }
                if(previuesColor[1] !== '🔴'){          // 4 punto
                    wrongColor[1] += 0;
                    previuesColor[1] = '🔴';
                }else{
                    wrongColor[1] += 1
                    previuesColor[1] = '🟢';
                }
        }
        
        
    }

    return wrongColor[0] < wrongColor[1] ? wrongColor[0] : wrongColor[1];           // 1 punto
  }