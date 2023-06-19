// Exercício 2:

// Crie uma função construtora de veículo que usa os argumentos marca, modelo e ano e define as propriedades marca, modelo e ano na instância. Adicione um método drive() ao protótipo Vehicle que registre uma mensagem no console indicando que o veículo está dirigindo. Crie uma função de construtor Car que herde de Vehicle e receba um argumento de cor adicional. Substitua o método drive() para registrar uma mensagem que inclua a cor do carro.

function Veiculo(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

Veiculo.prototype.drive = function(){
    console.log(`O veículo ${this.marca} ${this.modelo}, ano ${this.ano} está dirigindo`);
}


function Car(marca, modelo, ano, cor){
    Veiculo.call(this, marca, modelo, ano);
    this.cor = cor;
}

Car.protoype = Object.create(Veiculo.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function(){
    console.log(`O veículo ${this.marca} ${this.modelo} ${this.cor} , ano ${this.ano} está dirigindo`);    
}
const carro1 = new Veiculo('Toyota', 'Corolla', 2023);
console.log(carro1);
carro1.drive();

const carro2 = new Car('Honda', 'Civic', 2015, 'Preto');
console.log(carro2);
carro2.drive();



