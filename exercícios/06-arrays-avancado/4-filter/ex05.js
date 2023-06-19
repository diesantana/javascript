/*5.	Exercício 5: Filtrando uma matriz de objetos com base em várias condições
Dada uma matriz de objetos que representam livros com propriedades de título, autor e ano, filtre todos os livros escritos por Stephen King ou publicados antes do ano 2000. */

const books = [
    {title: 'The Shining', author: 'Stephen King', year: 1977},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008},
    {title: 'The Stand', author: 'Stephen King', year: 1978},
    {title: 'Harry Potter', author: 'J.K Rowling', year: 1997},
];

const filtered = books.filter((obj) => obj.author === 'Stephen King' || obj.year < 2000);
console.log(filtered);




