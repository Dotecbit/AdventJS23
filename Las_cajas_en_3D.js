/*
    Nivel: Fácil.
    Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
    Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
    Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

    Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.
    Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/

//Con strcturedClone
function drawGift(size, symbol) {
    let realSize = size - 1
    let maxInnerBoxSize = size/2+0.5;
    let draw = []
    let result = []

    draw.push(" ".repeat(realSize)+"#".repeat(size))

    for(let i = 0; i < realSize - 1; i++){
        draw.push(" ".repeat(realSize-i-1)+"#"+symbol.repeat(maxInnerBoxSize)+"#"+symbol.repeat(i)+"#")
    }
    result = result.concat(
        structuredClone(draw),
        "#".repeat(size-1)+"#"+symbol.repeat(maxInnerBoxSize)+"#",
        draw.reverse().map(d => d.trim())
        );

    return size > 1 ? result.join('\n')+'\n' : '#\n'
}

//Con otro objeto (usando el truco de copia Json.parse(Json.stringify))
function drawGift(size, symbol) {
    let realSize = size - 1
    let maxInnerBoxSize = size-2;
    let draw = []
    let result = []

    draw.push(" ".repeat(realSize)+"#".repeat(size))

    for(let i = 0; i < realSize - 1; i++){
        draw.push(" ".repeat(realSize-i-1)+"#"+symbol.repeat(maxInnerBoxSize)+"#"+symbol.repeat(i)+"#")
    }

    result = JSON.parse(JSON.stringify(draw));
    result = result.concat(
        "#".repeat(size-1)+"#"+symbol.repeat(maxInnerBoxSize)+"#",
        draw.reverse().map(d => d.trim())
        );

    return size > 1 ? result.join('\n')+'\n' : '#\n'
}