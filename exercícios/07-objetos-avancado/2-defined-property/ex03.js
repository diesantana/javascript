// Exercício 03: Definir uma propriedade somente leitura
/*Defina uma propriedade somente leitura fullName no objeto pessoa que concatena as
propriedades firstName e lastName com um espaço entre elas.*/

const person = {
    firstName: 'John',
    lastName: 'Doe'
};

Object.defineProperty(person, 'fullName', {
    enumerable: true,
    value: `${person.firstName} ${person.lastName}`
});
person.fullName = 'Dic Smith';
console.log(person.fullName);