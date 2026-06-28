/*
Use essa função auxiliar em todos os exercícios que precisarem
 simular operações *****íncronas:
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
Exercício 1: Crie uma Promise manualmente que:

Aguarda 1 segundo (use setTimeout)
Resolve com a mensagem "Operação concluída"
Trate o resultado com .then() e possíveis erros com .catch()

Checklist - Exercício 1:
✅ Criou uma Promise manualmente
✅ Usou setTimeout
✅ Aguardou 1 segundo com 1000
✅ Resolveu com "Operação concluída"
✅ Tratou o resultado com .then()
✅ Adicionou .catch() para possíveis erros
 */

console.log("--- Exercício 1 ---");
const minhaPromise = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Operação concluída");
    },1000);
});

minhaPromise
.then((resultado) =>{
    console.log(resultado);
})
.catch((erro)=>{
    console.log(erro)
});

/*
Exercício 2: Converta o exercício 1 para usar async/await com try/catch.
 A lógica deve ser a mesma, só a sintaxe muda.

 Checklist - Exercício 2:
✅ Criou uma função async
✅ Usou try/catch
✅ Usou await
✅ Reaproveitou a mesma Promise do Exercício 1
✅ Mostrou o resultado com console.log
✅ Tratou possíveis erros no catch
 */
console.log("--- Exercício 2 ---");
async function minhaFuncao (){
    try{
        const resultado = await minhaPromise;
        console.log(resultado);
    }catch (erro) {
        console.log(erro);
    }
}
minhaFuncao();

/*
Exercício 3: Crie uma função async chamada buscarUsuario que:

Simula uma busca (use esperar(1000))
Retorna o objeto { id: 1, nome: "João", cargo: "dev" }
Crie outra função async chamada buscarSalario que recebe um cargo e
retorna um salário simulado 
(dev → 6000, design → 4500, qualquer outro → 3000)
Crie uma terceira função exibirPerfil que chama as duas em sequência 
(primeiro busca o usuário, depois busca o salário pelo cargo) 
e imprime: "João | dev | R$6000"

Checklist - Exercício 3:
✅ Criou a função async buscarUsuario
✅ Usou await esperar(1000) dentro dela
✅ Retornou o objeto { id: 1, nome: "João", cargo: "dev" }
✅ Criou a função async buscarSalario(cargo)
✅ Tratou o cargo dev retornando 6000
✅ Tratou o cargo design retornando 4500
✅ Tratou qualquer outro cargo retornando 3000
✅ Criou a função exibirPerfil
✅ Chamou buscarUsuario() primeiro
✅ Depois chamou buscarSalario(usuario.cargo)
✅ Imprimiu no formato João | dev | R$6000
✅ Chamou exibirPerfil()
 */
console.log("--- Exercício 3 ---")
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function buscarUsuario(){
    await esperar(1000);
    const usuario = {id:1,nome:"João",cargo:"dev"};
    return usuario;
}
async function buscarSalario(cargo){
    if(cargo === "dev")return 6000
    if(cargo === "design")return 4500
    return 3000
}
async function exibirPerfil(){
    const usuario = await buscarUsuario();
    const salario = await buscarSalario(usuario.cargo);
    console.log(`${usuario.nome} | ${usuario.cargo} | R$${salario}`)
}

exibirPerfil();

/*
Exercício 4: Refatore o exercício 3 para que buscarUsuario e buscarSalario sejam disparadas
em paralelo com Promise.all — mas atenção: buscarSalario precisa do cargo do usuário,
então pense em como reorganizar isso. 
Dica: você vai precisar de duas etapas.

Checklist - Exercício 4:
✅criei uma função async para exibir Perfil em Paralelo
✅usei variavel user para pegar dados da função buscarUsuario
✅usei Promise.all para pegar dados da função buscarSalario que precisa do cargo
✅exibi os dados no console
 */
console.log("--- Exercício 4 ---");

async function exibirPerfilParalelo(){
    const user = await buscarUsuario();
    const [salario] = await Promise.all([
        buscarSalario(user.cargo)
    ])
    console.log(`${user.nome} | ${user.cargo} | R$${salario}`);
}
exibirPerfilParalelo();

/*
Exercício 5 — Desafio: Crie uma função tentarNovamente que recebe uma função assíncrona e um número de tentativas. Ela deve:

Chamar a função
Se falhar, tentar novamente até esgotar as tentativas
Se todas falharem, lançar o último erro

javascript// Para testar, use essa função que falha aleatoriamente:
const operacaoInstavel = () => new Promise((resolve, reject) => {
  const sucesso = Math.random() > 0.6;
  setTimeout(() => {
    sucesso ? resolve("Sucesso!") : reject(new Error("Falhou"));
  }, 500);
});

const resultado = await tentarNovamente(operacaoInstavel, 3);
console.log(resultado); // "Sucesso!" quando conseguir

Checklist - Exercício 5:
✅criei uma função assíncrona tentarNovamente para pegar uma função e o numero de tentativas
✅crie uma variavel ultimoErro
✅usei um for para percorrer o numeros de tentativas
✅usei o try para retornar uma função
✅usei o catch para exibir o se o numero de tentativas é igual a i e retorna o ultimoErro
✅peguei uma estrutura pronta para testar 
✅mostrei o resultado no console
 */
console.log("--- Exercício 5 ---");
async function tentarNovamente (fn,tentativas){
    let ultimoErro;
    for(let i = 1; i <= tentativas;i++){
        try{
            return await fn();
        }catch (erro) {
            ultimoErro = erro;
            if(i=== tentativas) throw ultimoErro;
        }
    }
}

const operacaoInstavel = () => new Promise((resolve, reject) => {
  const sucesso = Math.random() > 0.6;
  setTimeout(() => {
    sucesso ? resolve("Sucesso!") : reject(new Error("Falhou"));
  }, 500);
});

const resultado = await tentarNovamente(operacaoInstavel, 3);
console.log(resultado);

/*
Exercício - 6
 */
const buscarDados = async () => {
    try{
        const resultado = await fetch("https://api.exemplo.com/dados"); // fetch pode falhar.
        if(!resultado.ok){
            throw new Error(`HTTP ${resultado.status} - ${resultado.statusText}`);
        }
    
        const json = await resultado.json(); // resultado sem o await.
        console.log(json.nome);
    } catch (err){
        console.log("Erro ao buscar dados: "+err.message);
    }
};

buscarDados();