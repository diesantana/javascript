const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// 1-  Dobre os numeros 

const dobrados = num.map(function(numAtual){
    return numAtual *2;
});
            // Arrow
const dobrados2 = num.map((num) => num *2);


const people = [
    {name: 'Luiz', age: 62},
    {name: 'Maria', age: 23},
    {name: 'Eduardo', age: 55},
    {name: 'Leticia', age: 19},
    {name: 'Rosana', age: 32},
    {name: 'Wallace', age: 47},
];


// 2-  retorne apenas os nomes em um array 
const nomes = people.map(function(obj){
    return obj.name;
});
            // arrow
const nomes2 = people.map(obj => obj.name);



// 3- Remova apenas a chave nome do objeto
const semNome = people.map(function(obj){
    let newObj = {...obj};
    delete newObj.name;
    return newObj;
});

            // arrow
const semNome2 = people.map(obj =>{
    let newObj = {...obj};
    delete newObj.name;
    return newObj;
});

// Nunca altere o original, é sempre recomendado criar um novo array ou objeto modificado. 

// 4- Adiciona uma chave id em cada objeto
const chaveId = people.map(function(obj, indice){
    let newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

console.log(chaveId, people);