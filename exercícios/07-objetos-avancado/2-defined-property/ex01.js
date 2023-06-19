//  
/* 
Escreva uma função createReadOnlyProperty que receba um objeto obj, um nome de
propriedade propName e um valor propValue e adicione uma propriedade somente leitura
ao objeto com o nome e o valor especificados. A função deve retornar o objeto.
*/

// com uma função não funciona

const person = {name: 'John'};

Object.defineProperty(person, 'age', {
    value: 30,
    enumerable: true,
    writable: true,
    configurable: false
});

console.log(person);

