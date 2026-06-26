/*
Exercício 1: Crie um array tarefas com pelo menos 4 strings. Use push para adicionar uma 
nova tarefa e forEach para imprimir todas numeradas (1, 2, 3...).
 */

const tarefas= ["arrumar a cama","escovar os dentes","comprar os pães","tomar o café"]
tarefas.push("estudar programação")
console.log("Exercício 1: ")
tarefas.forEach((tarefa,indice)=>{
    console.log(`Indice: ${indice} - Tarefa: ${tarefa}`)
})
/*
Exercício 2: Dado o array:
javascript
const precos = [120, 45, 230, 89, 15];
Use forEach para imprimir cada preço formatado como "R$ 120,00" e,
 ao final do loop (fora dele), imprima o maior e o menor valor (pode usar Math.max()
  e Math.min() com spread: Math.max(...precos)).
 */
const precos = [120,45,230,89,15]
console.log("Exercício 2: ")
precos.forEach((preco)=>{
    console.log(`Preco: R$${preco.toFixed(2)}`)
})
const maiorValor = Math.max(...precos)
const menorValor = Math.min(...precos)
console.log(`Maior valor: R$${maiorValor}`)
console.log(`Menor valor: R$${menorValor}`)

/*
Exercício 3: Crie um array de objetos produtos, cada um com nome e preco (mínimo 3 produtos). 
Use forEach para imprimir uma "nota fiscal" formatada com nome e preço de cada item,
 e o total geral somado.
 */
const produtos = [{nome:"Arroz",preco:25.00},{nome:"Feijão",preco:28.00},{nome:"Picanha",preco:89.00}]
console.log(`Exercício 3:
Nota Fiscal:`)
let total = 0;
produtos.forEach((produto)=>{
    console.log(`Nome: ${produto.nome} - preço: R$${produto.preco.toFixed(2)}`)
    total += produto.preco
})
console.log(`Total: R$${total.toFixed(2)}`)
/*
Exercício 4: Dado o array:
javascript
const numeros = [5, 12, 8, 130, 44];
Use slice para criar um novo array só com os 2 primeiros elementos,
 sem alterar o array original. 
Imprima os dois arrays para provar que o original não mudou.
 */
const numeros = [5,12,8,130,44]
console.log("Exercício 4:")
console.log("Array original: "+numeros)
console.log("Novo Array: "+numeros.slice(0,2))
/*
Exercício 5 — Encontre o bug: Analise sem rodar.
javascriptconst carrinho = ["camisa", "calça", "tênis"];

function removerItem(array, item) {
  array.splice(array.indexOf(item), 1);
  return array;
}

const novoCarrinho = removerItem(carrinho, "calça");

console.log(carrinho); // ["camisa", "calça", "tenis"]
console.log(novoCarrinho); // ["camisa","tenis"]
Pergunta: o que é impresso em cada console.log? 
Essa é a saída esperada ou é um problema de design? Explique
remove a "calça" do array
 */
const carrinho = ["camisa", "calça", "tênis"];

function removerItem(array, item) {
  array.splice(array.indexOf(item), 1);
  return array;
}

const novoCarrinho = removerItem(carrinho, "calça");
console.log("Exercício 5: Encontre o bug")
console.log(carrinho); // ["camisa", "tenis"]
console.log(novoCarrinho); // ["camisa","tenis"]

/*
Exercício 6 — Desafio: Crie uma função buscarUsuario que recebe um array de objetos usuarios
 (com id e nome) e um id. 
A função deve percorrer o array com forEach e retornar o objeto do usuário encontrado 
(ou null se não encontrar).
 Teste com um array de 3 usuários, buscando um id existente e um inexistente.

Dica/pegadinha: pense bem se forEach é capaz de fazer a função return parar
 no meio do loop quando encontrar o item. 
Teste e observe o comportamento — você pode se surpreender.
 */
console.log("Exercício 6: Desafio")
const lista = [{id:1,nome:"João"},{id:2,nome:"Pedro"},{id:3,nome:"Maria"}]
function buscarUsuario(lista,id){
    return lista.find((usuario) => usuario.id === id || null)
}
console.log(buscarUsuario(lista,2))