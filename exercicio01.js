/*
 Exercício 1: Declare três variáveis: nome (string),
  idade (number), ehMaiorDeIdade (boolean).
  Imprima as três com console.log.
 */
let nome = "João Pedro";
let idade = 29;
let ehMaiorDeIdade = true;
console.log(`Exercício 1:
    Nome:${nome};
    idade:${idade};
    maioridade:${ehMaiorDeIdade};
    `
)
/*
Exercício 2: Calcule e imprima o resultado de:
javascriptconst x = 17;
const y = 5;
soma
diferença (x - y)
resto da divisão de x por y
se x é maior que y (true/false)
 */
const x = 17;
const y = 5;
console.log(`Exercício 2:
    soma: ${x+y};
    diferença: ${x-y};
    resto da divisão de x por y: ${x%y};
    x é maior que y: ${x>y};
`)
/*
Exercício 3: Um produto custa R$ 45,90 e você vai comprar 4 unidades.
 Calcule e imprima o valor total usando const.
 */
const produto = 45.90;
const quantidade = 4;
console.log(`Exercício 3:
    produto: ${produto};
    quantidade: ${quantidade};
    Total do valor: ${produto*quantidade};
`)

/*
Exercício 4 (desafio — pensar antes de codar): Sem rodar no computador ainda, responda no papel/mente: qual é o resultado de cada linha?
javascript
console.log(10 % 2 === 0);
console.log(5 == "5");
console.log(5 === "5");
console.log(true && false || true);
Escreva sua resposta para cada linha antes de testar no node. Depois teste e compare.
*/
exercicio 4: 
true;
true;
false;
true;
