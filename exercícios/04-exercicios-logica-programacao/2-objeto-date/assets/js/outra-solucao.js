const h1 = document.querySelector('.hora-data');
const data = new Date();

h1.innerHTML = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'short'}).format(data);

