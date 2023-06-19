//Exercício 4: achatar uma matriz de matrizes aninhadas em uma única matriz
// concatenar varios arrays em um único array. 

const nested = [[1, 2], [3, 4], [5, [6, 7]]];
const concatArr = nested.reduce((accumulator, current, index, arr)=> {
    return accumulator = arr.flat(Infinity);
}, []);

console.log(concatArr);



// Sua solução para o Exercício 4 parece correta! Você usou o reduce()método para nivelar a matriz aninhada e o flat()método para concatenar as submatrizes.
//No geral, sua solução é clara, concisa e fácil de ler. Bom trabalho!
