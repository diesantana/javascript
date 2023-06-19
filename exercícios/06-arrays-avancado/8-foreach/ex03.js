//Exercício 3: Filtrando um Array
//Escreva uma função filterArray que receba um array de números como entrada e retorne um novo array onde apenas os números pares do array original são incluídos. Use forEach() para iterar sobre a matriz e inserir números pares condicionalmente em uma nova matriz.

// Input: [1, 2, 3, 4, 5]
// Output: [2, 4]

let num = [1, 2, 3, 4, 5];


// forEach 
function filterArray(arr){
    let pares = [];
    arr.forEach(valor => {
        if(valor % 2 === 0) pares.push(valor);
    });
    return pares;
}
console.log(filterArray(num)); // [ 2, 4]

// Utilizando o filter
function filterArray2(arr){
    let pares = arr.filter(valor => valor % 2 === 0);
    return pares;
}
console.log(filterArray2(num)); // [2, 4]