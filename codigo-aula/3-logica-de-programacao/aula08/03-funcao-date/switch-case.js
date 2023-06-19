const data = new Date('1997-05-03 13:31:30');
let diaSemana = data.getDay();
console.log(diaSemana);
// 6
let diaSemanaNome;

switch (diaSemana){
    case 0:
        diaSemanaNome = 'Domingo';
        break;
    case 1:
        diaSemanaNome = 'Segunda-feira';
        break;
    case 2:
        diaSemanaNome = 'Terça-feira';
        break;
    case 3:
        diaSemanaNome = 'Quarta-feira';
        break;
    case 4:
        diaSemanaNome = 'Quinta-feira';
        break;
    case 5:
        diaSemanaNome = 'Sexta-feira';
        break;
    default:
        diaSemanaNome = 'Sábado';
        break;
} 
console.log(diaSemanaNome);
// Sábado
