//Exercício 1: Crie uma função do construtor Person que receba um argumento name e tenha um método sayHello que registre 'Olá, meu nome é [nome]'. Adicione um método greet ao protótipo Person que usa um argumento name e registra 'Olá, [nome], meu nome é [this.name]'.

/* Crie uma função do construtor Person que usa um argumento de nome e define uma propriedade de nome na instância.
Adicione um método sayHello ao protótipo da função do construtor Person que registre 'Hello, my name is [name]'.
Adicione um método greet ao protótipo Person que usa um argumento name e registra 'Olá, [nome], meu nome é [this.name]'. */

function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log(`Olá, meu nome é ${this.name}`);
};

Person.prototype.greet = function(name2){
    console.log(`Olá ${name2}, meu nome é ${this.name}`);
};

const p1 = new Person('Alice');
p1.sayHello();
p1.greet('Bob');