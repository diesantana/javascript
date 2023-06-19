// Exercício 3: Crie uma temperatura de objeto com uma propriedade celsius e adicione getters e setters para converter entre Celsius e Fahrenheit. A propriedade celsius deve armazenar a temperatura em Celsius e deve haver getters e setters para a temperatura equivalente em Fahrenheit.

const temperatura = {
    celsius: 39,
    get fahrenheit(){
        return (this.celsius * 1.8) + 32;
    }, 
    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }
};
temperatura.celsius = 10;
console.log(temperatura.celsius); // 10 
console.log(temperatura.fahrenheit); // 50
temperatura.fahrenheit = 20;
console.log(temperatura.fahrenheit); // 20
console.log(temperatura.celsius); // 6.6

