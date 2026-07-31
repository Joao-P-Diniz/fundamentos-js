const titulo = document.querySelector("h1");
console.log(titulo.textContent);

const paragrafos = document.querySelectorAll("p");
paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

const lista = document.querySelectorAll("li");
console.log(lista[1].textContent);
console.log("Quantidade na lista: "+lista.length);