/*const souUmDado = function(){
    console.log('Sou um dado');
};

//souUmDado(); // 'Sou um dado'

//console.log(typeof souUmDado); // function

function executaFuncao(funcao){
    funcao();
}

//executaFuncao(souUmDado); 
// 'Sou um dado'

const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
};

//funcaoArrow();  // Sou uma Arrow function

const obj = {
    nome: 'José',
    falar: function(){
        console.log('Estou falando');
    }
};

//obj.falar();
// 'Estou falando'

let pessoa = {nome: 'Miken', sobrenome: 'Mouse', idade: 12} 


let frutas = ['Maça', 'Banana', 'Uva', 'Maça', 'Pera'];

function funcao(a, b, ...c){
    console.log(a, b, c);
}
//funcao(1, 2, 3, 4, 5, 6);
// 1 2 [ 3, 4, 5, 6 ]
 

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const pessoa1 = criaPessoa('João', 'Santos');
//console.log(pessoa1);
// { nome: 'João', sobrenome: 'Santos' }


function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}

const duplicaNumero = criaMultiplicador(2);
const resultado = duplicaNumero(5);
//console.log(resultado); // 10*/


/*
function lerArquivo(nomeArquivo, callback) {
  // Código para ler o arquivo
  // Quando a operação é concluída, chame a função de retorno
  callback(dadosDoArquivo);
}

// Exemplo de uso da função callback
lerArquivo("arquivo.txt", function(dados) {
  //console.log("Os dados do arquivo são: " + dados);
});*/


/*
(function(){
    // Your code here

    let nome = 'Diego';
    let cafe = 'Pão';
    let funcao = function(){
        const num1 = 2;
    };
})();

(function(x, y){
    console.log(x + y)
})(5, 2);  // Output: 7

*/


function createPerson(name,lastName, age, height, weight){
    return {
        name,
        lastName,
        age,
        height,
        weight,
        get fullName(){
            return `${this.name} ${this.lastName}`;
        },

        set fullName(valor){
            const newName = valor.split(' ');
            this.name = newName.shift(); 
            this.lastName = newName.join(' ');
        },

        falaOi(){
            console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
        },
        // Getter
        get imc(){
            const indice = this.weight / (this.height ** 2);
            return indice.toFixed(2);
        }
    };
}

const pessoa1 = createPerson('João','Oliveira', 13, 1.50, 55);
pessoa1.falaOi();
// Output: Hello my name is João and I am 13 years old.
console.log(pessoa1.imc);
// Output: 24.44
console.log(pessoa1.fullName);
// Output: 'João Oliveira'

pessoa1.fullName = 'João Oliveira Silva'; // João Oliveira Silva

console.log(pessoa1.name); // João
console.log(pessoa1.lastName); // Oliveira Silva










