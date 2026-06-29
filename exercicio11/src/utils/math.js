
 const somar = (a,b) => a+b;
 const subtrair = (a,b) => a-b;
 const multiplicar = (a,b) => a*b;
 const dividir = (a,b) => {
    if(b===0) throw new Error ("Divisão por zero!");
    return a / b;
 }

 const calcularPorcentagem = (valor,porcentagem) => (porcentagem / 100) * valor;

 export {
    somar,
    subtrair,
    multiplicar,
    dividir,
    calcularPorcentagem
}
