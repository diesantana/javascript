//9.	Exercício 9: Verifique se um objeto contém uma propriedade
const obj = {
    name: 'John',
    age: 30
};

console.log(Object.keys(obj).includes('name')); 
// true
console.log(Object.keys(obj));
// [ 'name', 'age' ]

