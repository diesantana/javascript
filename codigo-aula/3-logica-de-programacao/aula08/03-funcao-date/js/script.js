const data = new Date('2023-1-21 06:40:00');
console.log('Dia', data.getDate());
// Dia 21
console.log('Mês', data.getMonth());
// Mês 0 (O mês é exibido pelo índice, sendo 0 Janeiro e 11 Dezembro)
console.log('Ano', data.getFullYear());
// Ano 2023
console.log('Hora', data.getHours());
// Hora 6
console.log('Minutos', data.getMinutes());
// Minutos 40
console.log('Segundos', data.getSeconds());
// Segundos 0
console.log('Milissegundos', data.getMilliseconds());
// Milissegundos 0
console.log('Dia da semana', data.getDay());
// Dia da semana 6
console.log(data.toString());
// Sat Jan 21 2023 06:40:00 GMT-0300 (Horário Padrão de Brasília)

console.log(Date.now());
// retorno = 1674381337322 

