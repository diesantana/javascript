// Exercício 1: Escreva uma função que receba dois Date objetos como parâmetros e retorne o número de dias entre eles.

function getDiferencaDias(obj1, obj2){
    const calculaDiferenca = Math.abs((obj1.getTime() - obj2.getTime()) / 86400000);
    return Math.ceil(calculaDiferenca);
}

const data1 = new Date();
const data2 = new Date(2023, 5, 16);
let diferencaDias = getDiferencaDias(data1, data2);
console.log(`Número de dias entre as duas datas: ${diferencaDias}`); // 365




const joao = 9;
const jose = 11;

const diferenca = Math.abs(9 - 11);
console.log(diferenca); // 2
