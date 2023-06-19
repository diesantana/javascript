// Exercício 07: Criando uma função de fábrica de pessoas


/* Resultado esperado:
{name: "Alice", age: 30}
{name: "Bob", age: 35}  */


function createPerson(name, age){
    return {
        name: name,
        age: age,
    }
}

const p1 = createPerson('Alice', 30);
const p2 = createPerson('Bob', 35);
console.log(p1);
console.log(p2);