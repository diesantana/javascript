// Exercício 2: Mapeando um Array
//Escreva uma função doubleArray que receba um array de números como entrada e retorne um novo array onde cada número do array original foi dobrado. Use forEach() para iterar sobre a matriz e enviar os valores duplicados para uma nova matriz.

// Input: [1, 2, 3, 4, 5]
// Output: [2, 4, 6, 8, 10]

let numeros = [1, 2, 3, 4, 5];


function doubleArray(arr){
    let newArray = [];
    arr.forEach(valor => newArray.push(valor *2));
    return newArray;
}
console.log(doubleArray(numeros)); // [ 2, 4, 6, 8, 10 ]



// Utilizando a map 
function doubleArray2(arr){
    let newArray = arr.map(valor => valor *2);
    return newArray;
}
console.log(doubleArray2(numeros)); // [ 2, 4, 6, 8, 10 ]