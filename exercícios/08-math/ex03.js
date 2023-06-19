// Exercício 3: Calcular a Raiz Quadrada de um Número Escreva uma função que receba um número como parâmetro e retorne a raiz quadrada desse número usando o Math.sqrt() método.

function getRaizQuadrada(num) {
    return Math.sqrt(num);
}

const num = 16;
const raiz = getRaizQuadrada(num);

console.log(raiz);