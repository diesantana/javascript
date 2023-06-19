// 1. Escreva uma função que receba um array de inteiros e retorne a soma de todos os números pares do array.

function retornaPares(arr) {
    let pares = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            pares += arr[i];
        }
    }
    return pares;
}

const inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(retornaPares(inteiros));