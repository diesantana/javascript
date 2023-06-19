/*Exercício 5: Concatenar uma matriz de matrizes
Escreva uma função que receba um array de arrays e retorne um array concatenado usando o método map().
*/
function concatenador(arr){
    const uniao = arr.reduce((accumalator)=>{
    return accumalator = arr.flat(Infinity);
    }, []);
    return uniao;
}

let array1 = [[1, 2, 3], [4, 5], [6, [7, 8], 9]];

console.log(concatenador(array1));




