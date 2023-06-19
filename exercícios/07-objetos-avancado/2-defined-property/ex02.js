// Exercício 2: Criar uma propriedade não enumerável
/* 
Escreva uma função createNonEnumerableProperty que usa um objeto obj, um nome de
propriedade propName e um valor propValue e adiciona uma propriedade não enumerável
ao objeto com o nome e o valor especificados. A função deve retornar o objeto.
*/

const person = {
    name: 'John',
};

Object.defineProperty(person, 'age', {
    value: 30,
    enumerable: false,
    writable: true
});

console.log(person.age);

// com função não funciona