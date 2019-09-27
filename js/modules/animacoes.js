// Buscando todos os links internos
/*
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos[2].href);
*/

// Seleciona o H2 dentro de .animais-descricao
/*const selectionH2 = document.querySelector('.animais-descricao h2');
console.log(selectionH2);
*/

// Seleciona o último <p> do site
/*const lastP = document.querySelectorAll('p');
console.log(lastP[--lastP.length]);
*/

// Selecionando todas as imagens do site
/*const allImgs = document.querySelectorAll('img');
allImgs.forEach(function(item){
    item.classList.add('img-opacity');
    console.log(item);
});*/

// Transformando HTMLCollection em NodeList
// Elementos vindos como HTMLCollection
/*const itemClass = document.getElementsByClassName('titulo');
const itemClassConvert = Array.from(itemClass);*/
// Usando ArrowFunction, item do ES6
/*itemClassConvert.forEach((item) => {
    item.classList.add('cor-titulo');
});*/

/* 
//Trabalhando com Medidas e Distâncias
const listaAnimais = document.querySelector('.animais-lista');
// Mostra a altura do elemento, mesmo se houver scroll
const alturaElemento = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

const firstH2 = document.querySelector('h2');
// Distância da esquerda
firstH2.offsetLeft;

// Exibindo todas as distâncias do objeto
const rect = firstH2.getBoundingClientRect();

// Verificando se elemento passou do top
if (rect.top < 0) {
    console.log('Passou do elemento');
}
*/

// Somando a largura de todas as imagens
// function somaLarguraImg() {
//     const img = document.querySelectorAll('img');
//     let soma = 0;
//     img.forEach((imagem) => {
//         soma += imagem.offsetWidth;
//     });
//     console.log(soma);
// };
// window.onload = function() {
//     somaLarguraImg();
// }

// const primeiroH1 = document.querySelector('h1');
// console.log(primeiroH1);
// primeiroH1.innerText = "Novo Título"







