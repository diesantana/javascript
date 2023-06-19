// Exercício 1:

// Crie uma função do construtor Person que receba um argumento name e defina a propriedade name. Adicione um método greet() ao protótipo Person que registra uma mensagem de saudação no console. Crie uma função construtora Student que herde de Person e receba um argumento de nota adicional. Substitua o método greet() para registrar uma mensagem que inclua a nota do aluno.


// Explicação:

// Nesta solução, criamos a função do construtor Person e adicionamos um método greet() ao seu protótipo. O método greet() usa interpolação de string para registrar uma mensagem de saudação no console que inclui o nome da pessoa.

// Em seguida, criamos a função construtora Student que herda de Person. Para fazer isso, primeiro chamamos a função do construtor Person com this como o contexto e o argumento name passado para o construtor Student. Isso define a propriedade name na instância Student.

// Em seguida, definimos o protótipo Student como um objeto criado a partir do protótipo Person usando Object.create(). Isso cria um novo objeto que herda do protótipo Person e define o protótipo Student para esse novo objeto. Também definimos a propriedade do construtor do protótipo Aluno como Aluno.

// Por fim, sobrescrevemos o método greet() no protótipo Aluno para registrar uma mensagem que inclui a nota do aluno.

// Quando criamos uma instância de Person e chamamos seu método greet(), ele registra uma mensagem no console que inclui o nome da pessoa. Quando criamos uma instância Student e chamamos seu método greet(), ela registra uma mensagem no console que inclui o nome e a nota do aluno.

// Solução 

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am in grade ${this.grade}.`);
  };
  
  const person = new Person('John');
  const student = new Student('Jane', 10);
  person.greet(); // Hello, my name is John.
  student.greet(); // Hello, my name is Jane and I am in grade 10.
  