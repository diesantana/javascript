// Exercício 3:
// Instrução: Crie uma função chamada fetchUser que usa um ID de usuário como entrada. A função deve retornar uma promessa que resolve com o objeto de usuário recuperado de uma API remota. Implemente a função e use-a para exibir o nome do usuário.

function fetchUser(idUser){
    const users =[{name: 'John', id: 1}, {name: 'Bob', id: 2},];

    return new Promise((resolve, reject) => {
        users.forEach(obj => { 
            if(obj.id == idUser) resolve(obj.name);
        })
        reject('Usuário Não encontrado');
    })
    .then(value => console.log(value))
    .catch(erro => console.log(erro));
}

fetchUser(2);

