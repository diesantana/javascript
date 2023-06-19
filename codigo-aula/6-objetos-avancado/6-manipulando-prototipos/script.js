function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
}

const p1 = new Person('John', 30);
p1.greet();

const p2 = {
    name: 'Alice',
    age: 20
};

Object.setPrototypeOf(p2, Person.prototype);
p2.greet();
