/*
Exercício 1: Declare uma variável temperatura com valor numérico de sua escolha.
 Use if/else if/else para imprimir:

Abaixo de 15° → "Frio"
Entre 15° e 25° → "Agradável"
Acima de 25° → "Quente"
*/

const temperatura = 28;
console.log("Exercicio 1: ")
if(temperatura < 15){
    console.log(`temperatura: ${temperatura}° \nstatus: Frio
    `)
}else if(temperatura >= 15 && temperatura <= 25){
    console.log(`temperatura: ${temperatura}° \nstatus: Agradável
    `)
}else{
    console.log(`temperatura: ${temperatura}° \nstatus: Quente
    `)
}
/*
Exercício 2: Declare saldo e valorCompra. 
Imprima se a compra pode ser realizada ou não.
 Se sim, imprima o saldo restante. 
*/
const saldo = 500;
const valorCompra = 250;
console.log("Exercicio 2: ")
if(saldo >= valorCompra){
    console.log(`compra realizada com sucesso!
saldo atual: R$${saldo - valorCompra}
    `)
}else{
    console.log(`Saldo insuficiente!`);
}
/*
Exercício 3: Usando switch, receba um número de 1 a 7 
e imprima o dia da semana correspondente.
 Para qualquer outro número, imprima "Dia inválido".
*/
const diaSemana = 3
let dia = ""
console.log("Exercicio 3: ")
switch(diaSemana){
    case 1:
    dia = `Domingo`
    break
    case 2:
    dia = `Segunda-Feira`
    break
    case 3:
    dia = `Terça-Feira`
    break
    case 4:
    dia = `Quarta-Feira`
    break
    case 5:
    dia = `Quinta-Feira`
    break
    case 6:
    dia = `Sexta-Feira`
    break
    case 7:
    dia = `Sábado`
    break
    default: 
    dia = `Dia inválido`
}
console.log(`Dia da Semana: ${dia}\n`)
/* 
Exercício 4: Reescreva o Exercício 1 usando operador ternário (só a parte frio/quente —
 ignore o "agradável" por ora, ternários aninhados ficam para depois).
*/
const temp = 20
console.log("Exercicio 4: ")
const result = temp < 15 ? "Frio " : "Quente" 
console.log(`Status da temperatura: ${temp}° - ${result}`)
/*
 Exercício 5 — Desafio (raciocine antes de codar):
  O que cada console.log abaixo imprime? 
 Escreva sua resposta como comentário antes de rodar.
 */
const valor = 0;
const texto = "false";
const lista = [];

console.log(valor ? "tem valor" : "sem valor"); // sem valor
console.log(texto ? "tem texto" : "sem texto"); // tem texto
console.log(lista ? "tem lista" : "sem lista"); // tem lista
