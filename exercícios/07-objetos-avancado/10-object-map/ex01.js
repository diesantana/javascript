// Exercício 1: Instrução de Contagem de Ocorrências: Escreva uma função que receba uma string como entrada e retorne um objeto Map contendo a contagem de cada caractere na string.

// Entrada: "hello"

// Saida: Map(4) { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }

// solução A função countOccurrencesusa uma string como entrada e inicializa um objeto Map vazio chamado charMap. Em seguida, itera sobre cada caractere na string usando um for...ofloop. Para cada caractere, ele verifica se já existe no arquivo charMap. Em caso afirmativo, incrementa a contagem em 1; caso contrário, define a contagem como 1. Finalmente, a função retorna o charMap.


function contOcorrencias(str){
    const charMap = new Map(); 

    for(let char of str){
        if(charMap.has(char)){
            charMap.set(char, charMap.get(char) + 1);
        }else{
            charMap.set(char, 1);
        }
    }
    return charMap;
}

const result = contOcorrencias('bollo');
console.log(result);