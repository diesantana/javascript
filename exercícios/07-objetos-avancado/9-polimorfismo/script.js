// Polimorfismo : o polimorfismo é obtido definindo métodos com o mesmo nome em classes diferentes e substituindo esses métodos para fornecer implementações destintas

function Person(name){
    this.name = name; 
}

Person.prototype.greet = function(){
    console.log('Hello!');
};

function Student(name, curso){
    Person.call(this, name);
    this.curso = curso;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; 

Student.prototype.greet = function(){
    console.log(`Hello, meu nome é ${this.name}, eu sou um estudante de ${this.curso}.`);
};

function Teacher(name, curso){
    Student.call(this, name, curso);
}

Teacher.prototype = Object.create(Student.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greet = function(){
    console.log(`Olá, eu sou o professor ${this.name}, a minha aula é de ${this.curso}`);
}

const professor = new Teacher('John', 'JavaScript');
console.log(professor.greet());