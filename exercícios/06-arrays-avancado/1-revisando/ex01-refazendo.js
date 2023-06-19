// 1. Escreva uma função que receba um array de inteiros e retorne a soma de todos os números pares do array.

// Para um número ser par a divisão por dois tem que dar resto zero.  

function somaPares(arr){
    let soma = 0;
    for(let numeros of arr){
        if(numeros % 2 === 0){
            soma += numeros;
        }
    }
    console.log(soma);
}

const arrayNumeros = [1,2,3,4,5,6,8,10];

somaPares(arrayNumeros);