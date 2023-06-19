// 4.	Inserir elementos em um array: Dado um array de números, insira o número 0 no início e o número 6 no final usando o método splice().

const num = [1, 2, 3, 4, 5];
num.splice(0, 0, 0);
num.splice(num.length, 0, 6);
console.log(num);