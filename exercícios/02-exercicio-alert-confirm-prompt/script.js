//alert('Ola Mundo, JavaScript');

/* Exercicio: Peça para o usuário digitar dois números no prompt e mostre a soma desses números.

let numero1 = prompt('Digite um número:');
numero1 = Number(numero1);
let numero2 = prompt('Digite outro número:');
numero2 = Number(numero2);
alert(`O resultado é: ${numero1 + numero2}`);
*/

/* Exercicio 2: varA = A, varB = B, varC = C. 
    varA deve apontar para o valor B
    varB para o valor C
    varC valor A 
*/

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let outroVar; // undefined

outroVar = varA; // Poderiamos inserir o valor de A na criação da variável e excluir essa linha.
varA = varB;
console.log(`varA = ${varA}`);
varB = varC;
console.log(`varB = ${varB}`);
varC = outroVar;
console.log(`varC = ${varC}`);