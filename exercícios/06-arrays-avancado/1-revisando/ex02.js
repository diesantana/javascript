// 2.	Escreva uma função que receba um array de strings e retorne a string mais longa do array.
function maisLonga(arr) {
    let strLonga = '';
    for(valor of arr){
        if(valor.length > strLonga.length){
            strLonga = valor;
        }
    }
    return strLonga;
}

let frutas = ['banana', 'maça', 'pera', 'goiaba', 'melancia'];
console.log(maisLonga(frutas)); 
// melancia