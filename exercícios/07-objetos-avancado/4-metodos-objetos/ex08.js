// Exercício 8: Converter um objeto em um array de objetos
// Instrução: Escreva uma função que receba um objeto como entrada e retorne uma matriz de objetos, onde cada objeto tem duas propriedades: chave (o nome de uma propriedade no objeto original) e valor (o valor dessa propriedade).

//  Output: [{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: "c", value: 3 }]


const obj1 = {a: 1, b: 2, c: 3};

function getArray(obj){
    const entries = Object.entries(obj);
    const array = [];
    for(let [key, value] of entries){
        array.push({key: key, value: value});
    }
    return array;
}

const array = getArray(obj1);

console.log(array); 
// [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }]


