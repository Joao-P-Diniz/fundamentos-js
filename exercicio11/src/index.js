import criarUsuario from "./services/usuarios.js";
import { multiplicar, validarEmail, formatarMoeda } from "./utils/index.js";

const user1 = criarUsuario("João","joao@email.com",29);
const user2 = criarUsuario("Maria","maria@email.com",24);

console.log(user1);
console.log(user2);

try {
    criarUsuario("Joao","emailerrado@emailcom",150);
} catch (error) {
    console.log("User creation failed: ",error.message);
}

const precoProduto = 240.86;
const qtdade = 5;
let total = multiplicar(precoProduto,qtdade);

const precoFormatado = formatarMoeda(precoProduto);
const totalFormatado = formatarMoeda(total);

console.log(`Nota Fiscal: 
Preço do Produto: ${precoFormatado}
Quantidade: ${qtdade}
Total: ${totalFormatado}`);