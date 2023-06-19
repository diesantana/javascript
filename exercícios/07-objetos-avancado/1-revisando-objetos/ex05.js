// Exercício 5: Iterando sobre as propriedades do objeto

/* Resultado esperado: 
name: Alice
age: 30
address: [object Object]
*/

const person = {
    name: 'Alice',
    age: 30,
    address: {
        street: 'Rua cinco 05',
        city: 'New York',
        state: 'NY'
    }
};

for(let keys in person){
    console.log(`${keys}: ${person[keys]}`);
}
