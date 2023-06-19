// Exercício 1: Crie um objeto person com as propriedades firstName e lastName. Adicione um getter fullName que retorne o nome completo da pessoa.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person); 
// { firstName: 'John', lastName: 'Doe', fullName: [Getter] }

console.log(person.firstName); // John
console.log(person.lastName); // Doe
console.log(person.fullName); // John Doe