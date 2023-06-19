let pessoa1 = {
    nome:'João',
    sobrenome:'Pé de feijão',
    idade: 20
}

/*console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.sobrenome);*/


function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('João', 'Pé de feijão', 20);

//console.log(pessoa2.sobrenome);


//Simplificando a função criaPessoa
function criaPessoa2(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

let pessoa3 = criaPessoa2('Miken', 'Mouse', 10);
//console.log(pessoa3);


// Métodos em objetos
let pessoa4 = {
    nome: 'João',
    sobrenome: 'Pé de Feijão',
    idade: 12,
    fala() {
        console.log(`Olá eu sou o ${this.nome} ${this.sobrenome}`);
    }
}

pessoa4.fala();







