const pessoa = {
    nome: 'João',
    idade: 32,
    profissao: 'Agricultor'
};

for (let propriedades in pessoa){
    console.log(`${propriedades}: ${pessoa[propriedades]}`);
}

const frutas = ['Banana', 'Pera', 'Maça', 'Uva', 'Goiaba'];

for (let prop in frutas){
    console.log(`${prop} : ${frutas[prop]}`); 
}


