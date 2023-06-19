/*function* myGeneretor(){ // meuGerador
    let i = 0;
    while (true) {
        yield i; 
        i++;
    }
}*/
/*
let iterator = myGeneretor();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
*/
/*
function* myGenerator2(){
    let value  = yield;
    console.log(value);
}

let iterator = myGenerator2();
iterator.next();    // Inicia o gerador (chama a função)
iterator.next('Hello'); // 'Hello'*/

/*
function* gerador(){
    yield 1;
    yield 2;
    yield* outroGerador();
    yield 5;
}

function* outroGerador(){
    yield 3;
    yield 4;
}

let iterator = gerador();

console.log(iterator.next().value); // 1 (gerador)
console.log(iterator.next().value); // 2 (gerador)
console.log(iterator.next().value); // 3 (outroGerador)
console.log(iterator.next().value); // 4 (outroGerador)
console.log(iterator.next().value); // 5 (gerador)
*/
/*
function* yieldEReturn(){
    yield 'Y';
    return 'R';
    yield 'Resto do código';
}

let iterator = yieldEReturn();
console.log(iterator.next()); // { value: 'Y', done: false }
console.log(iterator.next()); // { value: 'R', done: true }
console.log(iterator.next()); // { value: undefined, done: true }
*/

/*
function* GeradorConstrutor() {};
let obj = new GeradorConstrutor; // TypeError: GeradorConstrutor is not a constructor
*/
/*
const geradora = function* () {
    yield 10;
    yield 20;
};

const iterator = geradora();
console.log(iterator.next());  // { value: 10, done: false }
console.log(iterator.next());  // { value: 20, done: false }
console.log(iterator.next());  // { value: undefined, done: true }*/




