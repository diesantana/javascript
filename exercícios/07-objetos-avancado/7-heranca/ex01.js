// Exercício 1:

// Crie uma função do construtor Person que receba um argumento name e defina a propriedade name. Adicione um método greet() ao protótipo Person que registra uma mensagem de saudação no console. Crie uma função construtora Student que herde de Person e receba um argumento de nota adicional. Substitua o método greet() para registrar uma mensagem que inclua a nota do aluno.

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Olá, meu nome é ${this.name}`);
}

function Student(name, nota){
    Person.call(this, name);
    this.nota = nota;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.greet = function(){
    console.log(`Meu nome é ${this.name} e minha nota é ${this.nota}`);
}

const aluno1 = new Student('John', 'A');
console.log(aluno1);
aluno1.greet();

const p1 = new Person('John');
console.log(p1);
p1.greet();

