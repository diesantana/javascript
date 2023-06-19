// Exercício 4: Crie uma função do construtor Person com as propriedades firstName e lastName. Adicione uma função getter para fullName que retorna o nome completo da pessoa como uma string e uma função setter para fullName que define as propriedades firstName e lastName de uma só vez.

function Person(first, last){
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, 'fullName', {
        get: function(){
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(value){
            let partes = value.split(' ');
            this.firstName = partes[0];
            this.lastName = partes[1];
        }
    });
}

const person1 = new Person('John', 'Doe');
console.log(person1.fullName);

person1.fullName = 'Dic Smith'; 
console.log(person1.fullName);