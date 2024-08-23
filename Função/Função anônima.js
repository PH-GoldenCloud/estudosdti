//São funções que não possuem nome atribuído a elas.
//Elas devem ser associadas a variáveis ou a uma constante(const)
//Elas são só acionadas quando forem executadas e não ocupam espaço na memória.
const med = (n1, n2) => {
  return (n1 + n2) / 2;
};
//O sinal de => é uma seta!!! Não é uma comparação.
console.log(med(12, 22));

const med2 = (n1, n2) => (n1 + n2) / 2;
console.log(med2(12, 22));

//vejamos agora um exemplo de uma função anônima chamada "função construtor"
const yada = new Function("v1", "v2", "return (v1 + v2)/2");
// o F do function deve ser maiúsculo!!
console.log(yada(12, 46));
//defini como cosntante, já que geralmente, não alteramos funções dps de prontas.
//esse tipo só é recomendado para códigos menores e mais rápidos, não exagere.
