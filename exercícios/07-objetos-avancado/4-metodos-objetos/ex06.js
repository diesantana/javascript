// Exercício 6: Dado o objeto : Encontre a soma de todos os valores em um objeto
// Objeto:  { a: 1, b: 2, c: 3 };
// Instrução: Escreva uma função que receba um objeto como entrada e retorne a soma de todos os valores do objeto.

const obj1 = {a: 1, b: 2, c: 3};

function getSoma(obj){
    let values = Object.values(obj);
    let sum = 0;
    for(let i = 0; i < values.length; i++){
        sum += values[i];
    }

    return sum;
}

const total = getSoma(obj1);
console.log(total); // 6