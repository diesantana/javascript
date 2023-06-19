// Exercício 2: Acessando uma propriedade aninhada usando a notação de ponto e colchete

// Resultado esperado: 'NY'

const person = {
    name: 'Bob',
    age: 35,
    address: {
        street: '456 Oak St',
        city: 'Othertown',
        state: 'NY'
    }
};

const patch = person.address.state;

console.log(patch);
//  NY












