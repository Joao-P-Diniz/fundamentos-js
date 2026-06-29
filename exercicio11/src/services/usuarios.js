import { validarEmail, validarIdade } from "../utils/validators.js"

export default function criarUsuario (nome,email,idade){
    if(nome === "") throw new Error("Nome vazio...");
    if(!validarEmail(email))throw new Error("Email inválido...");
    if(!validarIdade(idade))throw new Error("Idade fora do intervalo...");

    const usuario = {
        nome,
        email,
        idade,
    }
    usuario.id = Math.random().toString(36).slice(2,9);
    usuario.criadoEm = new Date();

     return usuario;
}