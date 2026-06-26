/*
Exercício 1: Use for para imprimir os números de 1 a 10.
 Na mesma iteração, imprima se cada número é par ou ímpar.
 */
let par = ""
let impar = ""

for(let i = 1; i <= 10; i++){
    if(i%2 == 0){
        par += i +" "
    }else{
        impar += i +" "
    }
}
console.log(`Exercício 1: 
Numeros pares: ${par}
Numeros impares: ${impar}`)
// ✅ Correto
for (let i = 1; i <= 10; i++) {
  const tipo = i % 2 === 0 ? "par" : "ímpar";
  console.log(`${i} → ${tipo}`);
}
/*
Exercício 2: Dado o array abaixo, use for para somar 
todos os valores e imprimir o total e a média.
javascript
const notas = [7.5, 8.0, 6.5, 9.0, 7.0];
 */
const notas = [7.5,8.0,6.5,9.0,7.0]
let total = 0
let media ;
for(let i = 0; i < notas.length; i++){
    total += notas[i]
}
media = total / notas.length
console.log(`Exercício 2: 
Notas: ${notas}
Total: ${total}
Media: ${media}`)
/*
Exercício 3: Use while para simular uma contagem regressiva de 10 até 0. 
Ao chegar em 0, imprima "Lançamento!".
*/
let contador = 10
console.log("Exercício 3: ")
while(contador >= 0){
    console.log(contador)
    contador--
}
console.log("Lançamento!")
/*
Exercício 4: Use for com continue para imprimir 
apenas os números ímpares de 1 a 15
 */
let impares = "";
for(let i = 1; i <= 15; i++){
    if(i%2==0)continue
        impares += i+" ";
}
console.log(`Exercicio 4:
numeros impares: ${impares}`)
/*
Exercício 5 — Encontre o bug: O código abaixo tem um problema.
 Identifique, explique o que acontece e corrija.
 Não rode antes de analisar.
javascript
const produtos = ["notebook", "mouse", "teclado", "monitor"];

for (let i = 0; i <= produtos.length; i++) { // i não pode ser menor e igual só pode ser menor
  console.log(`Produto: ${produtos[i]}`);
}
 */
const produtos = ["notebook", "mouse", "teclado", "monitor"];
console.log("Exercicio 5 encontrei o bug: ")
for (let i = 0; i < produtos.length; i++) { // i não pode ser menor e igual só pode ser menor
  console.log(`Produto: ${produtos[i]}`);
}
/*
Exercício 6 — Desafio: Use for com break para encontrar o primeiro 
número divisível por 7 no intervalo de 1 a 100.
 Imprima o número encontrado e em qual iteração foi encontrado.
 */
console.log("Exercicio 6 Desafio: ")
let divisiveisPor7 = 0;
for(let i = 1; i <= 100; i++){
    if(i%7===0){
        divisiveisPor7 += i;
        break;
    }
}
console.log(`Numero divisivel: ${divisiveisPor7}`)

// ✅ Correto
let numeroEncontrado = 0;
let iteracao = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    numeroEncontrado = i;
    iteracao = i; // neste caso i e iteração coincidem, mas deixar explícito é melhor
    break;
  }
}

console.log(`Primeiro divisível por 7: ${numeroEncontrado}`);
console.log(`Encontrado na iteração: ${iteracao}`);
// Resultado: 7, encontrado na iteração 7






