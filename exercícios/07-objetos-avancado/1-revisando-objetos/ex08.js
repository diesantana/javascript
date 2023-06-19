// Exercício 08: Criando uma função de construtor de pessoa

/* Resultado esperado: 
{name: "Alice", age: 30}
{name: "Bob", age: 35}  */


function Person(name, age){
    this.name = name;
    this.age = age;
}

const p1 = new Person('Alice', 30);
const p2 = new Person('Bob', 35);

console.log(p1);
console.log(p2);