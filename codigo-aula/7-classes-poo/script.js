class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    

    greet(){
        console.log(`Olá, meu nome é ${this.name}`);
    }
}
const person1 = new Person('John', 30);

console.log(person1); // Person { name: 'John', age: 30 }
person1.greet(); // Olá, meu nome é John.




console.log('-------------//------------------');
// ----------------------- Herança -------------------------------------------------

class Employee extends Person{
    constructor(name, age, occupation){
        super(name, age);
        this.occupation = occupation; 
    }
    greet(){
        console.log(`Olá meu nome é ${this.name} e eu trabalho como ${this.occupation}.`);
    }
}

const person2 = new Employee('Alice', 25, 'Developer');

console.log(person2); 
// Employee { name: 'Alice', age: 25, occupation: 'Developer' } 

person2.greet();
// Olá meu nome é Alice e eu trabalho como Developer.




console.log('-------------//------------------');
// ----------------------- Getter e setter ----------------------------------

class Person2{
    constructor(name, age){
        this.name = name;
        this._age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        if(typeof value === 'number' && value > 0){
            this._age = value;
        }else{
            console.log('Idade inválida!');
        }
    }

}

const person3 = new Person2('Bob', 18)
console.log(person3); // Person2 { name: 'Bob', _age: 18 }
person3.age = 30;
console.log(person3); // Person2 { name: 'Bob', _age: 30 }
person3.age = -5;
// Idade inválida!
console.log(person3); // Person2 { name: 'Bob', _age: 30 }





console.log('-------------//------------------');
// ----------------------- Symbol --------------------------------------------


// Sintaxe

const symbol = Symbol('mySymbol');


// Symbol como chave de propriedade

const nomeSymbol = Symbol('nome');
const idadeSymbol = Symbol('idade');

const person = {
    [nomeSymbol]: 'John',
    [idadeSymbol]: 25,
};

console.log(person[nomeSymbol]); // John
console.log(person[idadeSymbol]); // 25
console.log(person); // { [Symbol(nome)]: 'John', [Symbol(idade)]: 25 }








