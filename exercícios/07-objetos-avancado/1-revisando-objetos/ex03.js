//Exercício 3:  Excluindo uma propriedade usando a notação de ponto

// Resultado esperado: {name: 'Alice', address: { street: '123 Main St', city: 'Anytown', state: 'CA' } }

const person = {
    name: 'Alice',
    age: 30,
    address: {
        street : 'rua central 123',
        city: 'Anytown',
        state: 'CA'
    }
};

const property = 'age';

delete person[property];
console.log(person);    












