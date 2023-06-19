//Exercício 5: Invertendo um Array
//Escreva uma função reverseArray que receba um array de valores como entrada e retorne um novo array com os valores na ordem inversa. Use forEach() para iterar sobre a matriz original e anexar cada valor a uma nova matriz.

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

let num = [1, 2, 3, 4, 5];

// forEach
function reverseArray(arr){
  let reverse = [];
  arr.forEach(element => reverse.unshift(element));
  return reverse;
}
console.log(reverseArray(num)); // [ 5, 4, 3, 2, 1 ]

// map 
function reverseArray2(arr){
  let reverse = arr.reduce((accumulator, element) => {
    accumulator.unshift(element);
    return accumulator;
  }, []);
  return reverse;
}
console.log(reverseArray2(num));