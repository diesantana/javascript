// Exercício 3: Instrução de frequência de palavras: Escreva uma função que receba um array de strings como entrada e retorne um objeto Map contendo a frequência de cada palavra no array.

// Entrada: ["apple", "banana", "apple", "orange", "banana", "apple"]

// Sainda:  Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

function getFrequency(arr){
    const frequencyMap = new Map();
    for(let str of arr){
        if(frequencyMap.has(str)){
            frequencyMap.set(str, frequencyMap.get(str) + 1);
        }else{
            frequencyMap.set(str, 1);
        }
    }
    return frequencyMap;
}

let input = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(getFrequency(input)); // Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }