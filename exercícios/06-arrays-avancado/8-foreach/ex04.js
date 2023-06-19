// Exercício 4: Removendo Duplicatas de um Array
//Escreva uma função removeDuplicates que receba uma matriz de valores como entrada e retorne uma nova matriz com todas as duplicatas removidas. Use forEach() para iterar sobre a matriz original e enviar valores exclusivos condicionalmente para uma nova matriz.

// Output: [1, 2, 3, 4, 5]
let num = [1, 2, 2, 3, 4, 4, 5];

// forEach
function removeDuplicates(arr){
    let newArray = [];
    arr.forEach(element => {
        if(!newArray.includes(element)) newArray.push(element);
    });
    return newArray;
}
console.log(removeDuplicates(num)); // [ 1, 2, 3, 4, 5 ]

// Filter
function removeDuplicates2(arr){
    let newArray = arr.reduce((acc, element) => {
        if(!acc.includes(element)) acc.push(element);
        return acc;
    }, []);
    return newArray;
}
console.log(removeDuplicates2(num)); // [ 1, 2, 3, 4, 5 ]



