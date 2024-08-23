//Funções callback, são funções dentro de outras funções que são passadas como argumento.
function soma(num1, num2) {
  res = num1 + num2;
  return res;
}
function multi(num1M, num2M) {
  Multi = num1M * num2M;
  return Multi;
}
function divFinal(x, y) {
  divF = x / y;
  return divF;
}

let numA = multi(2, 3);
let numB = multi(5, 3);
let resultado = soma(numA, numB);
console.log(divFinal(resultado, 7));
// A seguinte função vai multiplicar os valores de numA e numB e somá-los usando a função soma em callback.
