//Exercício 1: Acessando uma propriedade usando a notação de colchetes

// Resultado esperado: 'Alice'

const person = {
    name:  'Alice',
    age: 30,
    address: {
        street: '123 Rua central',
        city: 'Anytown',
        state: 'CA'
    }
};

const propertyName = 'name';

//console.log(person['name']);

console.log(person[propertyName]);







