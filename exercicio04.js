/*
Exercício 1: Crie uma arrow function calcularDesconto que recebe preco e percentual
 e retorna o preço final após o desconto. 
Teste com pelo menos dois casos.
 */
const calcularDesconto = (preco,percentual) =>preco - ( preco * percentual )
console.log("Exercicio 1: ")
console.log("Preço final: R$"+calcularDesconto(25.00,0.50))
console.log("Preço final: R$"+calcularDesconto(250.00,0.65))

/*
Exercício 2: Crie uma função classificarNota que recebe uma nota (0–10) e retorna:
Abaixo de 5 → "Reprovado"
Entre 5 e 7 → "Recuperação"
7 ou acima → "Aprovado"
Use return antecipado (sem else aninhado).
 */
const classificarNota = (nota) => {
    if(nota < 5)return "Reprovado"
    if(nota >= 5 && nota < 7)return "Recuperação"
    return "Aprovado"
}
console.log("Exercicio 2: ")
console.log("Situação: "+classificarNota(4))
console.log("Situação: "+classificarNota(6))
console.log("Situação: "+classificarNota(7))
/*
Exercício 3: Crie uma função contarPalavras que recebe uma string
 e retorna quantas palavras ela tem.
 Dica: pesquise o método .split() — você vai precisar dele.
 */
function contarPalavras(string){
    return string.split(" ").length
}
console.log("Exercicio 3: ")
console.log("Quantidade de palavras: "+contarPalavras("vamos embora que ainda é cedo"))
/*
Exercício 4: Crie uma função calcularIMC que recebe peso e altura e retorna o IMC
 e a classificação:

Abaixo de 18.5 → "Abaixo do peso"
18.5 a 24.9 → "Peso normal"
25 a 29.9 → "Sobrepeso"
30 ou acima → "Obesidade"

A fórmula do IMC é: peso / (altura * altura)
 */
console.log(`Exercicio 4:
Situação:`)
function calcularIMC(peso,altura){
    const IMC = peso / (altura * altura);

    let classificacao 
    if(IMC < 18.5){
        classificacao = "Abaixo do peso"
    }
    else if(IMC < 25){
        classificacao = "Peso normal"
    }
    else if(IMC < 30){
        classificacao = "Sobrepeso"
    }else{
        classificacao = "Obesidade"
    }
    return `IMC: ${IMC.toFixed(2)} - ${classificacao}`
}
console.log(calcularIMC(60,1.56))
/*
Exercício 5 — Encontre o bug: Analise sem rodar. O que está errado e por quê?
javascript
const somar = (a, b) => {
  const resultado = a + b;
  // faltou passar o return da função
}

const calcular = () => { 
  const x = 5;
  const y = 10;
  return somar(x, y);
}

console.log(calcular());
 */
console.log("Exercicio 5 - Encontre o bug")
const somar = (a, b) => {
  const resultado = a + b;
  return resultado
}

const calcular = () => { 
  const x = 5;
  const y = 10;
  return somar(x, y);
}

console.log(calcular());
/*
Exercício 6 — Desafio: Crie uma função tabuada que recebe um número e 
imprime a tabuada completa dele (de 1 a 10) no seguinte formato:
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
 */
console.log("Exercicio 6: ")
function calcularTabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}

calcularTabuada(5)









