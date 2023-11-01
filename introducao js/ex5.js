function calculaDist(x1, y1, x2, y2) {
    let parte1 = Math.pow(x2 - x1, 2);
    let parte2 = Math.pow(y2 - y1, 2);
    let distancia = Math.sqrt(parte1 + parte2);
    return distancia;
}

let x1 = 2;
let y1 = 5;
let x2 = 5;
let y2 = 6;

let distancia = calculaDist(x1, y1, x2, y2);

console.log("A distância é: " + distancia);
