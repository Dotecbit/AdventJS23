/*
    Nivel: Medio
    Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.
    Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
    Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
/*
    El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.
    Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.
    Los elfos se inspiraron en este reto de Code Wars.
*/

//Primera aproximación con "for", "switch" e "if"
// -> Complejidad: 10
function cyberReindeer(road, time) {
  let roads = [road];
  let indexSanta = 0;
  let barrier = false;
  
  for (let t = 0; t < time-1; t++){                                         //anidamiento = 1. 1 "for": 1 punto
    if(t + 1 === 5)                                                         //1 "if" + 1 anidamiento: 2 punto
      road = road.replaceAll("|","*");
    switch (road[indexSanta+1]) {                                           //anidamiento = 2. 1 anidamiento + 1 "switch": 2 punto
      case '*':
        road = `${road.slice(0,indexSanta)}.S${road.slice(indexSanta+2)}`;
        barrier = true;
        indexSanta++;
        break;
      case '.':
        if(barrier){                                                        //2 anidamiento + 1 "if" + 1 "else": 4 puntos
            road = `${road.slice(0,indexSanta)}*S${road.slice(indexSanta+2)}`;
            barrier = false;
        }
        else
            road = `${road.slice(0,indexSanta)}.S${road.slice(indexSanta+2)}`;
        indexSanta++;
    }
    roads.push(road);
  }
  
  return time === 0 ? [] : roads;                                           //1 "ternary operator": 1 punto
}

//Primera aproximación por "if-else"
// -> Complejidad: 7
function cyberReindeer(road, time) {
  let roads = time > 0 ? [road] : [];                                         //1 "ternary operator": 1 punto
  let indexSanta = 0;
  let nextPlace;
  let previous = ".";
  let roadArray;
  
  for (let t = 0; t < time-1; t++){                                         //anidamiento = 1. 1 "for": 1 punto
    if(t + 1 === 5)                                                         //1 anidamiento + 1 "if" + 1 "else": 3 puntos
      roadArray = roads[roads.length-1].replaceAll("|","*").split('');
    else
      roadArray = roads[roads.length-1].split('');
    nextPlace = indexSanta+1;
    if(roadArray[nextPlace] !== '|'){                                       //1 "if" + 1 anidamiento: 2 punto
        roadArray[indexSanta] = previous;
        previous = roadArray[nextPlace];
        roadArray[nextPlace] = 'S';
      indexSanta++;
    }
    roads.push(roadArray.join(''));
  }
  
  return roads;
}

//Segunda aproximación (con incremento anterior)
// -> Complejidad: 7
function cyberReindeer(road, time) {
  let roads = time > 0 ? [road] : [];                                         //1 "ternary operator": 1 punto
  let indexSanta = 0;
  let previous = ".";
  let roadArray;
  
  for (let t = 0; t < time-1; t++){                                         //anidamiento = 1. 1 "for": 1 punto
    if(t + 1 === 5)                                                         //1 "if" + 1 anidamiento: 2 punto
      roadArray = roads[roads.length-1].replaceAll("|","*").split('');
    else
      roadArray = roads[roads.length-1].split('');
    if(roadArray[indexSanta+1] !== '|'){                                    //1 "if" + 1 anidamiento: 2 punto
        roadArray[indexSanta] = previous;
        previous = roadArray[indexSanta+1];
        roadArray[++indexSanta] = 'S';
    }
    roads.push(roadArray.join(''));
  }
  
  return roads;
}