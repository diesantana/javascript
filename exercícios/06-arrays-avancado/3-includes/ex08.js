//8.	Exercício 8: Verifique se um array contém todos os elementos de outro array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 7];

if(arr2.every((elemento) => arr1.includes(elemento))){
    console.log('Contém todos os elementos');
}else{
    console.log('Não contém todos os elementos');
};
// Não contém todos os elementos





