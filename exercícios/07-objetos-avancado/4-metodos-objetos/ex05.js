// Exercício 3: Converter um objeto em um array de pares chave-valor
// Escreva uma função que receba um objeto como entrada e retorne uma matriz de pares chave-valor. Cada par chave-valor deve ser representado como uma matriz com dois elementos: a chave como o primeiro elemento e o valor como o segundo elemento. Use Object.keys() para iterar sobre as propriedades do objeto.

// Podemos utilizar o Objec.entries, ele já retorna os pares chave-valor

const obj = {
    a: 1,
    b: 'Hello',
    c: 3.14, 
    d:'world'
};

function chaveValor(obj){
    return Object.entries(obj);
}

console.log(chaveValor(obj));
// [ [ 'a', 1 ], [ 'b', 'Hello' ], [ 'c', 3.14 ], [ 'd', 'world' ] ]
