
const formatarMoeda = (valor) => Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(valor);

const formatarData = (data) => Intl.DateTimeFormat("pt-BR").format(data);

const capitalizarNome = (nome) => nome.split(" ").map((palavra)=>palavra[0].toUpperCase()+palavra.slice(1)).join(" ")

export {
    formatarMoeda,
    formatarData,
    capitalizarNome
}