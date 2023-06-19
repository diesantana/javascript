try {
    console.log('Abrir um arquivo');
    console.log('Manipular o arquivo');
    manipulandoArquivo();
} catch(e){
    console.log(e);
    throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!');
} finally{
    console.log('Fechando o arquivo');
}

console.log('Aplicação não morreu');

