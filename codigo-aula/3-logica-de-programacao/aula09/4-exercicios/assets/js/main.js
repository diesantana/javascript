const elementos = [
    {tag: 'p', texto: 'Frase 1 - Eu sou um parágrafo.'},
    {tag: 'div', texto: 'Frase 2 - Apenas uma div'},
    {tag: 'footer', texto: 'Frase 3 - Um footer'},
    {tag: 'section', texto: 'Frase 4 - Uma section'}
];
// Desestruturando o array em variáveis
let [{tag: tagP, texto: textP},{tag: tagDiv, texto: textDiv},{tag: tagFooter, texto: textFooter},{tag: tagSection, texto: textSection}] = elementos;
// Manipulando do DOM 
let divConteudo = document.querySelector('.div-conteudo');
// função que cria as tag com os textos
function creatTag(tagName, tagText){
    let tag = document.createElement(tagName);
    tag.innerHTML = tagText;
    return tag;
}

tagP = creatTag(tagP, textP);   // Criando o elemento 
divConteudo.appendChild(tagP);  // Inserindo no HTML 
tagDiv = creatTag(tagDiv, textDiv);
divConteudo.appendChild(tagDiv);
tagFooter = creatTag(tagFooter, textFooter);
divConteudo.appendChild(tagFooter);
tagSection = creatTag(tagSection, textSection)
divConteudo.appendChild(tagSection);


