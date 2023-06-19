// 3.	Adicionar elementos a um array: Dado um array de números, adicione os números 6, 7 e 8 ao final do array usando o método splice().

const num = [1, 2, 3 , 4, 5];
num.splice(num.length, 0, 6, 7, 8);
console.log(num);