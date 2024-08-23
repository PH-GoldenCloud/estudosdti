//O filter, como diz o nome, filtra tabelas dentro do array através do comando.
// const nova_tabela = callback => callback.tipo_de_dado === 'dado_requisitado'0
// const variavel_imprimivel = tabela_anterior.filter(nova_variável)
const escola = [
  { nome: "Pricila", profiss: "professor", cod: 26, funcao: "funcionario" },
  { nome: "Edmorrison", profiss: "zelador", cod: 75, funcao: "funcionario" },
  { nome: "Clarence", profiss: "estudante", cod: 86, funcao: "aluno" },
];
const papel = (x) => x.funcao === "funcionario";
const ocupa = escola.filter(papel);
console.log(`Ocupam o cargo de funcionários...${ocupa}`);

const profissional = (x) => x.profiss === "estudante";
const profissionalidade = escola.filter(profissional);
console.log(profissionalidade);

//COMO ENCAIXAR ARRAYS COM MAPS.

const nomeprofiss = escola.filter(
  (profun) => profun.funcao === "funcionario" && profun.profiss == "professor"
);
//nomeprofiss tem o mesmo valor que os valores funcao que dizem "funcionario" e os valores profiss que dizem "professor".
console.log(nomeprofiss);
