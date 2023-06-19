function Person(name){
    this.name = name;
}

Person.prototype.dizerOi = function(){
    console.log(`Olá, meu nome é ${this.name}`);
}

function Student(name, curso){
    Person.call(this, name);
    this.curso = curso;
}   

Student.prototype = Object.create(Person.prototype); 
Student.prototype.constructor = Student; 

Student.prototype.dizerCurso = function(){
    console.log(`Estou cursando ${this.curso}.`);
}

const aluno1 = new Student('John', 'Educação física');
aluno1.dizerOi(); // Olá, meu nome é John
aluno1.dizerCurso(); // Estou cursando Educação física.



