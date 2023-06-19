// Exercício 1: Cópia rasa de um objeto usando o operador spread
// Instrução: Crie um novo objeto que seja uma cópia superficial de um objeto existente usando o operador de propagação.

const person = {name: 'John', age: 30};
const person2 = {...person};
console.log(person, person2);
person.age = 45;
console.log(person, person2);
person2.name = 'Dic';
console.log(person, person2);