// Exercício 2: Crie um produto objeto com preço e quantidade de propriedades. Adicione um total getter que retorne o preço total do produto multiplicando suas propriedades de preço e quantidade.

const produto = {
    preco: 20,
    qtd: 3,
    get total(){
        return this.preco * this.qtd;
    }
};

console.log(produto);
// { preco: 20, qtd: 3, total: [Getter] }

console.log(produto.preco); // 20
console.log(produto.qtd); // 3
console.log(produto.total); // 60