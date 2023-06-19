// 5.	Remover e substituir elementos em um array: Dado um array de strings, remova o segundo e o terceiro elementos e substitua-os por 'orange' e 'banana' usando o método splice().

const str = ['blue', 'green', 'yellow', 'orange'];
str.splice(1, 2, 'orange', 'banana');
console.log(str);