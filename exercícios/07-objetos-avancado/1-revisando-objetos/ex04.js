//Exercício 4: Excluindo uma propriedade aninhada usando a notação de ponto e colchete

/* Resultado esperado: {
  name: 'Bob',
  age: 35,
  address: {
    street: '456 Oak St',
    city: 'Othertown'
  }
}*/

const person = {
  name: 'Bob',
  age: 35,
  address: {
    street: '456 Oak St',
    city: 'Othertown',
    state: 'NY' // excluir essa
  }
};

delete person.address.state; 
//delete person.address['state'];
console.log(person);





