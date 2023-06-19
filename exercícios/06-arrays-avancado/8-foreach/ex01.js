// Exercício 1: Somar um Array
//Escreva uma função sumArray que receba um array de números como entrada e retorne a soma de todos os números do array. Use forEach() para iterar sobre a matriz e acumular a soma.

// Input: [1, 2, 3, 4, 5]
// Output: 15

function sumArray(arr){
    let sum = 0;
    arr.forEach(valor => sum += valor);
    return sum;
}

let numeros = [1, 2, 3, 4, 5];
let total = sumArray(numeros);
console.log(total);
// 15




// Utilizando  o reduce 
function sumArray2(arr){
    let sum = arr.reduce((acc, current) => acc += current);
    return sum;
}
let total2 = sumArray2(numeros);
console.log(total2);