
const validarEmail = (email) => email.includes("@") && email.includes(".");
const validarSenha = (senha) => senha.length >= 8;
const validarIdade = (idade) => idade >= 0 && idade <= 120;

export {
    validarEmail,
    validarSenha,
    validarIdade
}

