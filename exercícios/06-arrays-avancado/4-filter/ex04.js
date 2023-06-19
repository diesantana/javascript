/* 4.	Exercício 4: Filtrando uma matriz de objetos com base em uma propriedade aninhada
Dada uma matriz de objetos que representam carros com propriedades de marca, modelo e ano, filtre todos os carros fabricados antes do ano 2000. */

const cars = [
    {make: 'Honda', model: 'Civic', year: 1998},
    {make: 'Toyota', model: 'Camry', year: 2005},
    {make: 'Ford', model: 'Mustang', year: 1967},
    {make: 'Chevrolet', model: 'Impala', year: 2018},
];

const oldCars = cars.filter((obj) => obj.year < 2000);
console.log(oldCars);