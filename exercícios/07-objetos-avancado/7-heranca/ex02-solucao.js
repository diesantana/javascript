// Exercício 2:

// Crie uma função construtora de veículo que usa os argumentos marca, modelo e ano e define as propriedades marca, modelo e ano na instância. Adicione um método drive() ao protótipo Vehicle que registre uma mensagem no console indicando que o veículo está dirigindo. Crie uma função de construtor Car que herde de Vehicle e receba um argumento de cor adicional. Substitua o método drive() para registrar uma mensagem que inclua a cor do carro.



// Explicação:

// Nesta solução, criamos a função construtora Vehicle e definimos as propriedades make, model e year na instância. Adicionamos um método drive() ao protótipo Vehicle que registra uma mensagem no console indicando que o veículo está dirigindo.

// Em seguida, criamos a função construtora Car que herda de Vehicle. Chamamos a função do construtor Vehicle com isso como contexto e os argumentos marca, modelo e ano passados ​​para o construtor Car. Isso define as propriedades de marca, modelo e ano na instância Car. Também definimos a propriedade color na instância Car.

// Em seguida, definimos o protótipo do carro como um objeto criado a partir do protótipo do veículo usando Object.create(). Isso cria um novo objeto que herda do protótipo do veículo e define o protótipo do carro para esse novo objeto. Também definimos a propriedade do construtor do protótipo Car como Car.

// Finalmente, sobrescrevemos o método drive() no protótipo Car para registrar uma mensagem que inclui a cor do carro.

// Quando criamos uma instância de Vehicle e chamamos seu método drive(), ela registra uma mensagem no console indicando que o veículo está dirigindo. Quando criamos uma instância Car e chamamos seu método drive(), ela registra uma mensagem no console indicando que o carro está dirigindo e inclui a cor do carro.





// Solução

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Vehicle.prototype.drive = function() {
    console.log(`The ${this.make} ${this.model} is driving.`);
  };
  
  function Car(make, model, year, color) {
    Vehicle.call(this, make, model, year);
    this.color = color;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.drive = function() {
    console.log(`The ${this.color} ${this.make} ${this.model} is driving.`);
  };
  
  const vehicle = new Vehicle('Honda', 'Civic', 2010);
  const car = new Car('Toyota', 'Corolla', 2015, 'red');
  vehicle.drive(); // The Honda Civic is driving.
  car.drive(); // The red Toyota Corolla is driving.
  