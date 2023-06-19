function recursiva(num){
  console.log(num);      // Exibindo o num no console
  if(num >= 10) return;  // Condição de parada
  num++;                 // Somando 1 ao num
  recursiva(num);        // Aqui o loop se repete
}

recursiva(3);  // Valor inicial da contagem

