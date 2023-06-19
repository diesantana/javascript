// Exercício 1: Gerar um número aleatório dentro de um intervalo Escreva uma função que receba dois parâmetros, min e max, representando os valores mínimo e máximo de um intervalo. A função deve retornar um número aleatório dentro desse intervalo (inclusive).

function generateRandomNum(min, max){
    if(min === 0 && max === 1){
        return Math.round(Math.random())
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num = generateRandomNum(1, 5);
console.log(num);
