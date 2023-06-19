// Exercício 3: Soma de todos os valores numéricos em um objeto
// Escreva uma função que receba um objeto como entrada e retorne a soma de todos os valores numéricos do objeto. Use Object.keys() para iterar sobre as propriedades do objeto.

// Object.keys não retorna os valores e sim os nomes das prop. Vamos utilizar o  Object.Values.
function somaNumeros(obj){
    let valores = Object.values(obj);
    let sum = 0; 
    for(let i = 0; i <= valores.length; i++){
        if(typeof valores[i] === 'number'){
            sum += valores[i];
        }
    }
    return sum.toFixed(2);
}

const obj = {
    a: 1,
    b: 'hello',
    c: 3.14,
    d: 'world'
};

let total = somaNumeros(obj);
console.log(total); // 4.14