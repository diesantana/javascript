// Exercício 4: Verifique se um objeto está vazio
// Escreva uma função que receba um objeto como entrada e retorne true se o objeto estiver vazio (ou seja, não tiver propriedades) e false caso contrário. Use Object.keys() para verificar se o objeto possui alguma chave.

const obj1 = {};
const obj2 = {a: 1, b: 'Hello'};

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}

console.log(isEmpty(obj1)); // true
console.log(isEmpty(obj2)); // false