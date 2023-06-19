// Exercício 7: Encontre todas as propriedades cujos valores são números pares
// Instrução: Escreva uma função que recebe um objeto como entrada e retorna uma matriz de todas as propriedades cujos valores são números pares.

const obj1 = {a: 1, b: 2, c: 3, d: 4};

function getPares(obj){
    let prop = Object.entries(obj);
    let pares = [];
    for(let [chave, valor] of prop){
        if(valor % 2 === 0){
            pares.push(chave);
        }
    }
    return pares;
}

const par = getPares(obj1);
console.log(par); // [ 'b', 'd' ]