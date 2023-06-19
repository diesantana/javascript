// Exercício 1 : Escreva uma função que recebe 2 números e retorne o maior deles

const maiorDeles = (n1, n2) =>  n1 > n2 ? n1 : n2;
//console.log(maiorDeles(8, 6)); // 61

//-----------------------------------------------------------------------------------------//


// Exercício 2: Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem

let ePaisagem = (width, height) => width > height;
//console.log(ePaisagem(50, 100)); // false


//-----------------------------------------------------------------------------------------//


/* Exercício 3: Escreva uma função que recebe um número e retorne o seguinte: 
    OK Número é divisível por 3 = Fizz
    OK Número é divisível por 5 = Buzz
    OK Número é divisível por 3 e 5 = FizzBuzz
    OK Número NÃO é divisível por 3 e 5 = Retorna o próprio número
    Checar se realmente é um número  = retorna o próprio número
    Use a função com números de 0 a 100
*/

function fizzBuzz(num){
    if(typeof num !== 'number' || num > 100) return `'${num}' Digite um NÚMERO de 0 a 100`;
    if(num % 3 === 0 && num % 5 === 0) return `${num} FizzBuzz`;
    if(num % 3 === 0) return `${num} Fizz`;
    if(num % 5 === 0) return `${num} Buzz`;
    return `${num}`
}

console.log(fizzBuzz('a'));
for(let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i));
}





