/* eu q coloquei:
HTMLcollection e NodeList são array-like.
//forEach() é um método de array, mas tem na Nodelist. 
//Alguns objetos array-like possuem esse método
//Uma nodelist possui. Mas caso não possuam, como um HTMLcollection, 
//o ideal é tranformá-lo em uma array com Array.from();*/
//getElementBy... retorna HTMLcollection
//Exercício: Pege os elementos da classe 'titulo', transforme-os em array
//P aplicar o método forEach;

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(item => {
  console.log(item);
});

//Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);