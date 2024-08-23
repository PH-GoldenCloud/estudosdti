//LISTAS ARMAZENAM DADOS NUMA VARIÁVEL SÃO TAMBÉM CHAMADAS DE VETORES OU ARRAYS
//LISTAS PODEM SER INSERIDAS EM OUTARS LISTAS.
let lista1 = [1.5, 2, 2.5, 3, 3.5];
console.log(lista1);
//LISTA DE NÚMEROS FLOAT E INT.
let lista2 = ["maçãs", "bananas", "abacaxis"];
console.log(lista2);
//LISTA DE STRINGS.
let lista3 = ["código", 3.4, 16, true];
console.log(lista3);
//listas, no js, podem ter conjuntos de variáveis de vários tipos.

//Você também pode definir um array da seguinte forma.
let pessoa = new Array();
//ou
//let pessoa = []; <--- o documento não deixa a gente repetir a mesma var. duas vezes.

//como inserir, remover e trocar itens de uma lista.
//vamos começar pelo básico:
let vetor = [];
vetor[x] = y;
//x é o índice e onde vamos inserir, y é o valor inserido, você também pode usar isso para ler o array, tipo
//console.log("O valor do ${vetor[x]}")
//No array o primeiro índice é o 0, o segundo é o 1, 2, 3... e assim por diante.
vetor.length; //vai dizer quantos elementos estão guardados no vetor.
vetor.sort; //vai organizar os itens do vetor em ordem crescente (menor pro maior).

const listaM = [1, 2, 3, 4, 5];
listaM.push(6);
console.log(listaM);
// o comando .push vai adicionar um novo dado ao array na última linha.
listaM.pop();
// o comando .pop vai eliminar um dado do array na última linha.
console.log(listaM);
