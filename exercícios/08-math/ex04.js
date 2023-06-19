// Exercício 4: Gere um inteiro aleatório entre 1 e 100 Escreva uma função que gere um inteiro aleatório entre 1 e 100 (inclusive) usando os métodos Math.random() e .Math.floor()

function genareteNum100(){
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}
console.log(genareteNum100());
