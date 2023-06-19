//Exercício 3: Concatenar um array de strings em uma única string

const words = ['the', 'quick', 'brown', 'Fox'];
const frase = words.reduce((accumulator, current, index, array)=>{
    if(index === array.length -1){
        return accumulator += current + '.';
    }else{
        return accumulator += current + ' ';
    }

}, '');

console.log(frase);