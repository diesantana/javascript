// 3.	Escreva uma função que receba um array de inteiros e retorne um novo array contendo apenas os elementos únicos do array original (ou seja, sem duplicatas).

function getUnicos(arr) {
    let semDuplicatas = [];
    for(elemento of arr){
        if(!semDuplicatas.includes(elemento)){
            semDuplicatas.push(elemento)
        }
    }
    return semDuplicatas;
}

let inteiros = [1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10];
console.log(getUnicos(inteiros)); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]