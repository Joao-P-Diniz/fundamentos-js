/*
Exercício 1 — Variáveis + Condicionais:

Declare as variáveis necessárias para representar um aluno:
 nome, nota, frequencia (percentual de presença).
  Crie uma função situacaoAluno que retorna:

"Reprovado por falta" → frequência abaixo de 75
"Reprovado por nota" → nota abaixo de 5
"Recuperação" → nota entre 5 e 7
"Aprovado" → nota 7 ou acima e frequência 75 ou mais

Use return antecipado.
 */
console.log("Exercício - 1")
const nome = "Joao";
const nota = 7;
const frequencia = 75;

function situacaoAluno(nota,frequencia){
    if(frequencia < 75)return "Reprovado por falta";
    if(nota < 5)return "Reprovado por nota";
    if(nota >=5 && nota < 7)return "Recuperação";
    if(nota > 7 || frequencia >= 75)return "Aprovado";
}

console.log("Aluno: "+nome +" \nSituação:"+situacaoAluno(nota,frequencia))

/*
Exercício 2 — Loop + Função:

Crie uma função somarPares que recebe um array de números e
 retorna a soma de apenas os números pares.
 Use for e continue.
javascriptsomarPares([1, 2, 3, 4, 5, 6]); // deve retornar 12
 */
console.log("Exercício - 2")
function somarPares(array){
    let total = 0;
    for(let i = 1;i <= array.length; i++){
        if(i%2==0){
            total += i;
            continue
        }
    }
        console.log("Array dos Numeros: "+array)
        console.log("Soma dos pares: "+total)
}

somarPares([1,2,3,4,5,6])

/*
Exercício 3 — Array de objetos + forEach:

Dado o array:
javascriptconst funcionarios = [
  { nome: "Ana", salario: 3200 },
  { nome: "Bruno", salario: 4500 },
  { nome: "Carla", salario: 2800 },
  { nome: "Diego", salario: 5100 },
];
Crie uma função relatorioSalarial que imprime:

Nome e salário de cada funcionário
Total da folha de pagamento
Média salarial
Nome do funcionário com maior salário

Tudo dentro de uma função, usando forEach para percorrer o array.
 */
console.log("Exercício - 3");
const funcionarios = [
    {nome:"Ana",salario:3200},
    {nome:"Bruno",salario:4500},
    {nome:"Carla",salario:2800},
    {nome:"Diego",salario:5100},
];

function relatorioSalarial(funcionarios){
    let total = 0;
    let media = 0;
    let maiorFuncionario = funcionarios[0];
    
    funcionarios.forEach((funcionario)=>{
        console.log(`Nome: ${funcionario.nome} - Salario: R$${funcionario.salario}`)
        total += funcionario.salario;
        if(funcionario.salario > maiorFuncionario.salario){
            maiorFuncionario = funcionario;
        }
    })
        media = total/funcionarios.length;
        console.log(`Total da Folha de Pagamento: R$${total}`);
        console.log(`Média salarial: R$${media}`);
        console.log(`Funcionario com maior salario: ${maiorFuncionario.nome} - R$${maiorFuncionario.salario}`)
}
relatorioSalarial(funcionarios)


/*
Exercício 4 — Lógica pura:

Crie uma função ehPrimo que recebe um número e retorna true se for primo, false se não for.
Um número primo é divisível só por 1 e por ele mesmo. Pense no algoritmo antes de codar.
javascriptehPrimo(2);  // true
ehPrimo(7);  // true
ehPrimo(9);  // false — 9 = 3 x 3
ehPrimo(1);  // false — 1 não é primo por definição
 */
console.log("Exercício - 4");
function ehPrimo(numero){
    if(numero < 2)return false;
    for(let i = 2; i < numero;i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}
console.log(ehPrimo(1))
console.log(ehPrimo(2))
console.log(ehPrimo(4))
console.log(ehPrimo(8))
console.log(ehPrimo(11))

/*
Exercício 5 — Integrador completo:

Crie uma função processarPedidos que recebe um array de pedidos:
javascriptconst pedidos = [
  { id: 1, produto: "notebook", valor: 3500, status: "aprovado" },
  { id: 2, produto: "mouse", valor: 150, status: "pendente" },
  { id: 3, produto: "teclado", valor: 280, status: "aprovado" },
  { id: 4, produto: "monitor", valor: 1200, status: "cancelado" },
  { id: 5, produto: "headset", valor: 350, status: "aprovado" },
];
A função deve imprimir:

Todos os pedidos aprovados com produto e valor
Total dos pedidos aprovados
Quantidade de pedidos por status (aprovado, pendente, cancelado)
 */
console.log("Exercício - 5")
const pedidos = [
    {id:1,produto:"notebook",valor:3500,status:"aprovado"},
    {id:2,produto:"mouse",valor:150,status:"pendente"},
    {id:3,produto:"teclado",valor:280,status:"aprovado"},
    {id:4,produto:"monitor",valor:1200,status:"cancelado"},
    {id:5,produto:"headset",valor:350,status:"aprovado"},
]

function processarPedidos(pedidos){
    let pedidosAprovado = 0;
    let pedidosCancelado = 0;
    let pedidosPendente = 0;
    pedidos.forEach((pedido)=>{
        if(pedido.status == "aprovado"){
            console.log(`Produto: ${pedido.produto} - Valor: R${pedido.valor}`);
            pedidosAprovado = pedido.status.length - pedidos.length;
        }
        if(pedido.status == "cancelado"){
            pedidosCancelado = pedido.status.length - pedidosAprovado - pedidos.length
        }
        if(pedido.status == "pendente"){
            pedidosPendente += pedido.status.length - pedidosAprovado - pedidos.length  + 1 
        }
    })
    console.log(`Total dos pedidos aprovados: ${pedidosAprovado}`);
    console.log(`Qauantidade de aprovados: ${pedidosAprovado}`);
    console.log(`Quantidade de  cancelados: ${pedidosCancelado}`);
    console.log(`Quantidade de pendentes: ${pedidosPendente}`);
}
processarPedidos(pedidos);

const calcularMedia = (notas) => {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 4] },
];

alunos.forEach((aluno) => {
  console.log(`${aluno.nome}: ${calcularMedia(aluno.notas)}`);
});