/*
Exercício 1: Crie uma função criarSaudacao que recebe um idioma 
("pt", "en", "es") e retorna uma função que recebe um nome e 
retorna a saudação no idioma correto:

"pt" → "Olá, João!"
"en" → "Hello, João!"
"es" → "Hola, João!"

Teste com os três idiomas.

CheckList:
 ✅Criou a função criarSaudacao
 ✅A função recebe um parâmetro idioma
 ✅A função retorna outra função
 ✅A função retornada recebe um parâmetro nome
 ✅A saudação muda conforme o idioma:
 ✅pt → Olá, Nome!
 ✅en → Hello, Nome!
 ✅es → Hola, Nome!
 ✅Existe tratamento para idioma inválido
 ✅Testou a função com os 3 idiomas
 ✅A saída usa interpolação de string corretamente
 ✅O resultado final está de acordo com o enunciado
 */
console.log("--- Exercício 1 ---");

const criarSaudacao = (idioma) =>{

    return (nome)=>{
            if(idioma === "pt")return `Olá, ${nome}!`;
            if(idioma === "en")return `Hello, ${nome}!`;
            if(idioma === "es")return `Hola, ${nome}!`;
            return "Idioma não suportado";
        };
    };


const saudacaoPT = criarSaudacao("pt");
const saudacaoEN = criarSaudacao("en");
const saudacaoES = criarSaudacao("es");

console.log(saudacaoPT("Jorge"));
console.log(saudacaoEN("Jorge"));
console.log(saudacaoES("Jorge"));

/*
Exercício 2: Crie uma função criarAcumulador que retorna uma função. 
Cada vez que a função retornada for chamada com um número, 
ela soma ao total acumulado e retorna o novo total:
javascript
const acumular = criarAcumulador();
acumular(10); // 10
acumular(25); // 35
acumular(5);  // 40

CheckList:
Criou a função criarAcumulador
✅ A função não precisa receber valor inicial
✅ A função retorna outra função
✅ Existe uma variável interna para guardar o total acumulado
✅ O total começa em 0
✅ A função retornada recebe um número
✅ O número recebido é somado ao total guardado
✅ A função retorna o novo total a cada chamada
✅ O acumulador mantém o valor entre chamadas
✅ Testou com múltiplas chamadas consecutivas
✅ Os resultados batem com o exemplo do exercício
 */
console.log("--- Exercício 2 ---");
const criarAcumulador = ()=>{
    let totalGuardado = 0;

    return (numero)=>{
        totalGuardado += numero;
        return totalGuardado;
    }
}
const acumular = criarAcumulador();
console.log(acumular(10));
console.log(acumular(25));
console.log(acumular(5));

/*
Exercício 3: Explique em comentário no código
o que acontece linha a linha aqui e qual o output:

function externa() {
  let x = 10; // cria x = 10

  function interna() { // cria uma função interna com y = 20
    let y = 20;
    console.log(x + y); // soma o x com y interno
  }

  return interna; // retorna a função interna
}

const fn = externa(); // chama a função externa que recebe o resultado interno
fn();

Depois implemente uma variação: modifique externa para que x 
comece em 0 e aumente 10 a cada vez que fn() for chamada.

CheckList:

Parte 1: explicar o código linha a linha
✅ Você identificou que externa cria uma variável x
✅ Você comentou que x = 10 no primeiro código
✅ Você comentou que existe uma função interna chamada interna
✅ Você comentou que interna cria y = 20
✅ Você comentou que console.log(x + y) faz a soma
✅ Você comentou que externa retorna interna
✅ Você comentou que const fn = externa() guarda a função retornada
✅ Você chamou fn()
✅ Você mostrou entendimento de closure
✅ Seu comentário geral está coerente com a execução
Parte 2: variação pedida
✅ Você alterou x para começar em 0
✅ Você fez x aumentar 10 a cada chamada de fn()
✅ Você manteve x fora da função interna, preservando a closure
✅ Você testou com múltiplas chamadas de fn()
✅ O comportamento acumulativo está funcionando
 */
console.log("--- Exercício 3 ---")
function externa() {
  let x = 0; // cria x = 0

  function interna() { // cria uma função interna com y = 20
    x += 10 // acumula com +10
    let y = 20;
    console.log(x + y); // soma o x com y interno
  }

  return interna; // retorna a função interna
}

const fn = externa(); // chama a função externa que recebe o resultado interno
fn(); // quanto mais vezes for chamada sempre somará +10
fn();
fn();

/*
Exercício 4: Crie uma função criarValidador que recebe um minimo 
e um maximo e retorna uma função que valida se um número está dentro do intervalo:

const validarIdade = criarValidador(0, 120);
const validarNota = criarValidador(0, 10);

validarIdade(25);  // true
validarIdade(150); // false
validarNota(8.5);  // true
validarNota(11);   // false

CheckList:
✅Criou a função criarValidador
✅A função recebe os parâmetros minimo e maximo
✅A função retorna outra função
✅A função interna recebe um parâmetro numero
✅A validação confere se o número está dentro do intervalo
✅A condição usa numero >= minimo && numero <= maximo
✅Retorna true quando está no intervalo
✅Retorna false quando está fora do intervalo
✅Criou validarIdade
✅Criou validarNota
✅Testou com valores válidos
✅Testou com valores inválidos
✅validarIdade está usando 0, 100, mas o enunciado pede 0, 120
 */
console.log("--- Exercício 4 ---");
const criarValidador = (minimo,maximo)=>{
    return (numero) =>{
        if(numero >= minimo && numero <= maximo)return true;
        return false;
    }
}
const validarIdade = criarValidador(0,100);
const validarNota = criarValidador(0,10);

console.log(validarIdade(25));
console.log(validarIdade(150));
console.log(validarNota(8.5));
console.log(validarNota(11));

/*
Exercício 5 — Desafio: Crie uma função memoizar que recebe uma função e retorna uma versão
 "memoizada" dela — ou seja, 
que guarda em cache os resultados já calculados e não recalcula para o mesmo input:
const fatorial = memoizar((n) => {
  if (n <= 1) return 1;
  return n * fatorial(n - 1); // sim, pode chamar fatorial aqui
});

fatorial(5); // calcula: 120
fatorial(5); // retorna do cache: 120 (sem recalcular)
fatorial(3); // calcula: 6
Dica: o cache pode ser um objeto {} dentro da closure.
 A chave é o argumento, o valor é o resultado.

CheckList:
✅ Criou a função memoizar
✅ A função recebe uma função como parâmetro
✅ Criou um cache dentro da função
✅ O cache começa vazio
✅ A função retorna outra função
✅ A função retornada recebe um argumento arg
✅ Verifica se o argumento já existe no cache
✅ Se existir, retorna o valor salvo
✅ Se não existir, chama a função original
✅ Salva o resultado no cache
✅ Retorna o resultado calculado
✅ Criou a função fatorial usando memoizar
✅ fatorial(5) retorna 120
✅ fatorial(5) pela segunda vez usa o cache
✅ fatorial(3) retorna 6
✅ O uso de closure está correto
 */
console.log("--- Exercício 5 ---");
const memoizar = (fn) =>{
    let cache = {};

    return (arg)=>{
        if(arg in cache){
            return cache[arg];
        }

        const resultado = fn(arg);
        cache[arg] = resultado;
        return resultado;
    };
};

const fatorial = memoizar((n)=>{
    if(n <= 1)return 1;
    return n * fatorial(n - 1);
})

console.log(fatorial(5))
console.log(fatorial(5))
console.log(fatorial(3))

/*
Exercício 6 — Encontre o bug:
function criarFuncoes() {
  const funcoes = [];

  for (var i = 0; i < 5; i++) {
    funcoes.push(() => console.log(i));
  }

  return funcoes;
}

const lista = criarFuncoes();
lista[0](); // esperado: 0, real: ?
lista[3](); // esperado: 3, real: ?
O que é impresso? Por quê? Corrija sem mudar a estrutura do loop — apenas uma palavra.
 - Primeiro imprime 5 e 5, porque o "i"  é uma única variavel compartilhada por todo o loop, 
 */
console.log("--- Exercício 6 ---");
function criarFuncoes() {
  const funcoes = [];

  for (let i = 0; i < 5; i++) {
    funcoes.push(() => console.log(i));
  }

  return funcoes;
}

const lista = criarFuncoes();
lista[0](); // esperado: 0, real: ? 5, resolvido: 0
lista[3](); // esperado: 3, real: ? 5, resolvido: 3