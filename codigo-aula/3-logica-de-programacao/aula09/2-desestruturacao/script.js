 //                  0          1           2           índice do array 
 //               0  1  2    0  1  2    0  1  2         índice dos valores

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista2); // [ 4, 5, 6 ]
const [,,seis] = lista2;
console.log(seis); // 6


const pessoa = {
    nome: 'Donald',
    local: {
        pais: 'EUA',
        estado: 'Florida',
        cidade: 'Orlando'
    },
    idade: 36
}

const {nome, ...outros} = pessoa;


