// Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.92

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);
console.log(imc);
let anoNascimento = 2022 - idade;
console.log(anoNascimento);

//console.log(nome, sobrenome,'tem',idade,'anos, pesa',peso,'kg, tem',altura,'de altura e seu IMC é de',imc);
//console.log(nome,'nasceu em',anoNascimento);

/* Concatenando
console.log(nome+' '+sobrenome+' tem '+idade+' anos, pesa '+peso+' kg, tem '+altura+' de altura e seu IMC é de '+imc);*/

console.log(`${nome +' '+ sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

