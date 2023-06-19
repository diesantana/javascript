// Exercício 2: arredondar um número para uma casa decimal específica Escreva uma função que receba dois parâmetros, num(um número) e decimalPlaces(um inteiro) e retorne num arredondado para o número especificado de casas decimais.

function arredonda(num, decimalPlaces){
    return  Number(num.toFixed(decimalPlaces));
}

const num = 3.14444444;
const numArredondado = arredonda(num, 2);
console.log( typeof numArredondado);