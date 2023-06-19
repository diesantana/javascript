//Exercício 1: Dado um array de números, retorne um novo array contendo apenas os números pares.

//  Exemplo de entrada:  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  Saída esperada: [2, 4, 6, 8]    

const numbers = [1, 2, 3, 4, 5, 6, 8, 9];
const pares = numbers.filter(valor => valor % 2 === 0);
console.log(pares);
// [ 2, 4, 6, 8 ]   
