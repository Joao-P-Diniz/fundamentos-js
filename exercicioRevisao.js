/*
Exercício 1: Dado o array:
javascript
const temperaturas = [28, 32, 19, 25, 38, 14, 22];
Use map para criar um novo array convertendo cada temperatura de Celsius para Fahrenheit.
 A fórmula é: F = (C * 9/5) + 32
*/
console.log("Exercício - 1");
const temperaturas = [28,32,19,25,38,14,22];

const temperaturasF = temperaturas.map((t)=>{ // usando o map para percorrer o array.
    const f = ((t*9/5)+32); // transformando o Celsius em Fahrenheit
    return f;
})
console.log("Temperatura em Celsius: ["+temperaturas+"]");
console.log("Temperatura em Fahrenheit: ["+temperaturasF+"]");

/*
Exercício 2: Dado o array:
javascript
const palavras = ["javascript", "python", "ruby", "go", "typescript"];
Use filter para retornar apenas as palavras com mais de 4 letras. 
Depois use map no resultado para deixar todas em maiúsculo. 
Faça em cadeia (um método após o outro na mesma expressão).
 */
console.log("Exercício - 2")
const palavras = ["javascript","python","ruby","go","typescript"];

const palavrasCom4Mais = palavras
.filter((p)=>p.length>4)
.map((p)=>p.toUpperCase());
console.log(palavrasCom4Mais);

/*
Exercício 3: Use reduce para calcular o total e a média do array:
javascriptconst vendas = [1500, 3200, 800, 4500, 2100];
Sem usar forEach ou for. Apenas reduce e .length.
 */
console.log("Exercício - 3");
const vendas = [1500,3200,800,4500,2100];
const total = vendas.reduce((acc,item)=>acc + item,0);
const media = total / vendas.length;
console.log("Total das vendas: R$"+total);
console.log("Média das vendas: R$"+media);

/*
Exercício 4: Dado o array de produtos:
javascriptconst produtos = [
  { nome: "notebook", preco: 3500, categoria: "eletronicos" },
  { nome: "camisa", preco: 89, categoria: "roupas" },
  { nome: "mouse", preco: 150, categoria: "eletronicos" },
  { nome: "calça", preco: 120, categoria: "roupas" },
  { nome: "monitor", preco: 1200, categoria: "eletronicos" },
];
Em uma única cadeia (filter + map + reduce):

Filtre apenas os eletrônicos
Extraia os preços
Some o total
 */
console.log("Exercício - 4");
const produtos = [
    {nome:"notebook",preco:3500,categoria:"eletronicos",},
    {nome:"camisa",preco:89,categoria:"roupas",},
    {nome:"mouse",preco:150,categoria:"eletronicos",},
    {nome:"calça",preco:120,categoria:"roupas",},
    {nome:"monitor",preco:1200,categoria:"eletronicos",},
];

const produtosEletro = produtos
    .filter((p)=>p.categoria==="eletronicos")
    .map((p)=>p.preco)
    .reduce((acc,preco)=>acc+preco,0);
console.log("Total dos produtos eletronicos: R$"+produtosEletro);

/*
Exercício 5 — Desafio: Use reduce para transformar 
o array abaixo em um objeto que agrupa os usuários por cargo:
javascript
const usuarios = [
  { nome: "Ana", cargo: "dev" },
  { nome: "Bruno", cargo: "design" },
  { nome: "Carla", cargo: "dev" },
  { nome: "Diego", cargo: "design" },
  { nome: "Eva", cargo: "dev" },
];
O resultado esperado:
javascript{
  dev: ["Ana", "Carla", "Eva"],
  design: ["Bruno", "Diego"]
}
 */
console.log("Exercício - 5");
const usuarios = [
    {nome:"Ana",cargo:"dev"},
    {nome:"Bruno",cargo:"design"},
    {nome:"Carla",cargo:"dev"},
    {nome:"Diego",cargo:"design"},
    {nome:"Eva",cargo:"dev"},
]

const devs = usuarios.reduce((acc,usuario)=>{
    if(usuario.cargo === "dev"){
        acc.push(usuario.nome);
    }
    return acc;
},[])
const designs = usuarios.reduce((acc,usuario)=>{
    if(usuario.cargo === "design"){
        acc.push(usuario.nome);
    }
    return acc;
},[])
console.log(`dev: [${devs}]`);
console.log(`design: [${designs}]`);

/*
Exercício 6 — Encontre o bug:
javascriptconst numeros = [1, 2, 3, 4, 5];

const resultado = numeros
  .filter((n) => n % 2 === 0)
  .map((n) => n * 3)
  .reduce((acc, n) => acc + n);

console.log(resultado); // esperado: 18
O código tem um bug que não lança erro mas pode 
causar comportamento inesperado em outros arrays. Identifique, explique e corrija.
 */
const numeros = [1, 2, 3, 4, 5];

const resultado = numeros
  .filter((n) => n % 2 === 0)
  .map((n) => n * 3)
  .reduce((acc, n) => acc + n,0);

console.log(resultado);