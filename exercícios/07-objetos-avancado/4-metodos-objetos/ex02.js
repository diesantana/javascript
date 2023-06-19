//Exercício 2: Cópia rasa de um objeto usando Object.assign()
//Instrução: Crie um novo objeto que seja uma cópia superficial de um objeto existente usando Object.assign().

const person = {name: 'John', age: 30};
const person2 = Object.assign({}, person);
console.log(person2);
delete person.age;
console.log(person2, person);