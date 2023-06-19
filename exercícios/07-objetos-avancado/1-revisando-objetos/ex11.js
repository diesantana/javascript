// Exercício 11: Congelando um objeto com propriedades aninhadas


/* Resultado esperado:
subValue1   */


const obj = Object.freeze({
    prop1: 'A',
    prop2: Object.freeze({
        subProp1: 'b',
        subProp2: 'c'
    }),
});

obj.prop2.subProp2 = 'New sub value';

console.log(obj.prop2);