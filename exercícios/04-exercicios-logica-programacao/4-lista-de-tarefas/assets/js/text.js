let string = 'Hello, world!';
string = string.replace(/o/g, '0');
//console.log(string);
// Hell0, w0rld!


/*
// Criando um JSON 
let frutas = ['Maça', 'Banana', 'Laranja'];
localStorage.setItem('Frutas', JSON.stringify(frutas));
// Recuperando os dados e convertendo 
let frutasArray = JSON.parse(localStorage.getItem('Frutas'));

*/




let saudacao = '   Hello world!   ';
let novaSaudacao = saudacao.trim();
//console.log(novaSaudacao);
// 'Hello world!'


// INDICE       0         1         2         3      4
let frutas = ['Maça', 'Banana', 'Laranja', 'Pera', 'Uva'];
let frutasSlice = frutas.slice(-1);
console.log(frutasSlice);
// [ 'Uva' ]



