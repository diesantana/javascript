// 4.	Escreva uma função que receba um array de inteiros como argumento e duplique(multiplique por 2) cada elemento do array.
function duplica(arr) {
    let duplicado = [];
    for(elemento of arr){
        duplicado.push(elemento * 2);
    }
    return duplicado;
}

let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(duplica(inteiros));
// [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
 