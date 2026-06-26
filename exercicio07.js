/* (❌ ✅)
Exercício 1: Crie um objeto livro com as propriedades:
 titulo, autor, paginas, disponivel (boolean).
 Use destructuring para extrair todas as propriedades e imprima cada uma com console.log.
 ---- checklist
 1.✅ fiz o objeto livro com as propriedades;
 2.✅ usei destructuring para extrair todas as propriedades;
 3.✅ imprimi cada propriedade em cada console.log;
 */
console.log("--- Exercício 1 ---");
const livro = {
    titulo:"Lord of the Rings",
    autor:"J. R. R. Tolkien",
    paginas:1216,
    disponivel:true,
};

const {titulo,autor,paginas,disponivel} = livro;
console.log(titulo)
console.log(autor)
console.log(paginas)
console.log(disponivel)

/*
Exercício 2: Dado o objeto:
javascriptconst config = {
  tema: "claro",
  idioma: "pt-BR",
  fontSize: 14,
};
Use spread para criar um novo objeto configAtualizada com tema alterado para "escuro"
 e uma nova propriedade notificacoes: true.
 Prove que o original não foi mutado imprimindo os dois.
 1.✅ fiz o objeto config;
 2.✅ usei o spread para criar novo objeto;
 3.✅ alterei propriedades do novo objeto;
 4.✅ provei que o original não foi alterado;
 */
console.log("--- Exercício 2 ---");
const config = {
    tema:"claro",
    idioma: "pt-BR",
    fontSize:14,
};

const configAtualizada = {...config,tema:"escuro",notificacoes:true};

console.log(`original:`);
console.log(config);
console.log(`novo:`)
console.log(configAtualizada);

/*
Exercício 3: Use Object.entries e forEach para imprimir cada propriedade
 e valor do objeto abaixo no formato "chave → valor":
javascript
const produto = {
  nome: "teclado",
  preco: 280,
  categoria: "eletronicos",
  estoque: 8,
};
1.✅ fiz o objeto produto;
2.✅ usei Object.entries para transformar tudo em array;
3.✅ usei o forEach para percorrer cada propriedade e valor do array;
4.✅ imprimi cada propriedade e valor do objeto no formato mencionado;
 */
console.log("--- Exercício 3 ---");

const produto = {
    nome: "teclado",
    preco: 280,
    categoria: "eletronicos",
    estoque:8,
};
const produtoArray = Object.entries(produto).forEach(([chave,valor])=>{
    console.log(`${chave} → ${valor}`)
})

/*
Exercício 4: Dado o array de objetos:
javascriptconst alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 4.0 },
  { nome: "Carla", nota: 7.2 },
  { nome: "Diego", nota: 6.1 },
  { nome: "Eva", nota: 9.3 },
];
Use map para adicionar uma propriedade situacao a cada aluno
 ("Aprovado" se nota >= 7, "Reprovado" se abaixo).
Retorne um novo array de objetos — não mute o original.

1.✅ fiz o array de objetos alunos;
2.✅ usei o map para percorrer cada item do array;
3.✅ adicionei a propriedade situacao para cada aluno;
4.✅ fiz uma condição de aluno com nota 7 ou maior fica com situação "Aprovado" com menor nota situação "Reprovado";
5.✅ retornei em um novo array sem mudar o original; 
 */
console.log("--- Exercício 4 ---");
const alunos = [
    {nome:"Ana",nota:8.5},
    {nome:"Bruno",nota:4.0},
    {nome:"Carla",nota:7.2},
    {nome:"Diego",nota:6.1},
    {nome:"Eva",nota:9.3},
];

const estudantes = alunos.map(({...aluno})=>{
    if(aluno.nota >= 7){
        aluno.situacao = "Aprovado";
    }else{
        aluno.situacao = "Reprovado";
    }
    return aluno;
});

console.log(alunos);
console.log(estudantes);

/*
Exercício 5 — Desafio: Dado o objeto aninhado:
javascriptconst empresa = {
  nome: "TechCorp",
  endereco: {
    cidade: "São Paulo",
    estado: "SP",
  },
  funcionarios: [
    { nome: "Ana", cargo: "dev", salario: 6000 },
    { nome: "Bruno", cargo: "design", salario: 4500 },
    { nome: "Carla", cargo: "dev", salario: 7000 },
  ],
};
Usando destructuring, filter, map e reduce:

Extraia nome da empresa e cidade do endereço via destructuring
Filtre apenas os devs
Some o total de salários dos devs
Imprima: "TechCorp | São Paulo | Total devs: R$13000"

1.✅ fiz o objeto empresa;
2.✅ fiz o destructuring do objeto;
3.✅ usei o filter para achar apenas os devs;
4.✅ usei o map para percorrer o array dos funcionarios;
5.✅ usei o reduce para somar os salarios dos dev;
6.✅ imprimi de acordo com que foi pedido no exercício;
 */
console.log("--- Exercício 5 ---");
const empresa = {
    nome: "TechCorp",
    endereco: {
        cidade:"São Paulo",
        estado:"SP",
    },
    funcionarios: [
        {nome:"Ana",cargo:"dev",salario:6000},
        {nome:"Bruno",cargo:"design",salario:4500},
        {nome:"Carla",cargo:"dev",salario:7000},
    ],
};

const { nome, endereco:{ cidade }, funcionarios, } = empresa;
const devs = funcionarios.filter(({ cargo }) => cargo === "dev" );
const nomesDev = devs.map(({ nome }) => nome);

const totalSalarios = devs.reduce((soma, { salario }) => soma + salario,0);
console.log(`${nome} | ${cidade} | total devs: R$${totalSalarios}`);
console.log(nomesDev);

/*
Exercício 6 — Encontre o bug:
javascriptconst usuario = {
  nome: "João",
  endereco: {
    cidade: "Parnaíba",
  },
};

const atualizarCidade = (user, novaCidade) => {
  user.endereco.cidade = novaCidade;
  return user;
};

const usuarioAtualizado = atualizarCidade(usuario, "Fortaleza");

console.log(usuario.endereco.cidade);          // o que imprime?
console.log(usuarioAtualizado.endereco.cidade); // o que imprime?
O que os dois console.log imprimem? Por que? Isso é um problema? Como corrigir?
os dois imprime Fortaleza. Porque objetos em javascript são passados por referência. Sim, se quiser manter o original intacto. criando uma nova copia do objeto.
 */
const usuario = {
  nome: "João",
  endereco: {
    cidade: "Parnaíba",
  },
};

const atualizarCidade = (user, novaCidade) => {
  return {
    ...user,
    endereco:{
        ...user.endereco,
        cidade:novaCidade,
    },
  };
};

const usuarioAtualizado = atualizarCidade(usuario, "Fortaleza");

console.log(usuario.endereco.cidade);          // o que imprime? // Parnaíba
console.log(usuarioAtualizado.endereco.cidade); // o que imprime? // Fortaleza
