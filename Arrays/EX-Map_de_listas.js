//É importante saber sobre MAP pois ele pode ser usado para extrair informações de dentro de uma array.
//Também é importante saber sobre funções de callback, uma vez que elas são indispensáveis pro map.
//vamos criar uma array propriamente dita;
const user = [
  { name: "lucas", cod: 235, idade: 23 },
  { name: "Rebeca", cod: 455, idade: 34 },
  { name: "pedro", cod: 558, idade: 17 },
];
//Essa array tem três tipos de elementos, nome, código e idade.
//vamos criar uma nova array que tenha apenas um tipo de elemento dessa array.

const nomes = user.map((produto) => produto.name);
const codigos = user.map((produto) => produto.cod);
const codigos2 = user.map((produto) => produto.cod * 2);
//VEJA: nomes é o nome da nova array, user é a array fonte, produto é a callback que vai atribuir o map de name a si mesma.
//VEJA: como a função produto é callback, podemos chamar ela várias vezes para criar arrays diferentes.
console.log(nomes);
console.log(codigos);
console.log(codigos2);
