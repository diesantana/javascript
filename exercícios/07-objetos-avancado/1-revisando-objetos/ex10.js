// Exercício 10: Congelando um Objeto Simples


/* Resultado esperado:
value1  */

const obj = Object.freeze({
    prop1: 'valor 1',
    prop2: 'valor 2',
    prop3: 'valor 3'    
});

obj.prop1 = 'outro valor';
console.log(obj.prop1);


  