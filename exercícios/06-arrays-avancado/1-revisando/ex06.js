// 6.	Escreva uma função que receba um array de inteiros e retorne um novo array contendo uma cópia do array original com todos os elementos dobrados (2x).

function dobrados(arr){
    let dobro = [];
    for(elementos of arr){
        dobro.push(elementos *2);
    }
    return dobro;
}

let inteiros = [1, 2, 3, 4, 5];
let dobro = dobrados(inteiros);

console.log(inteiros, dobro);