/*
* Mude o título do card para "Card Modificado pelo JS"
* Mude o texto para qualquer outro
* Mude a imagem para outra URL do picsum
* Adicione a classe destaque ao card e crie o CSS correspondente 
que mude a aparência
*/

const titulo = document.querySelector("h1");
titulo.textContent = "Card Modificado pelo JS";

const texto = document.querySelector("p");
texto.textContent = "Florestas, montanhas e cachoeiras proporcionam momentos de tranquilidade e contato com o meio ambiente. Aproveite para respirar ar puro e renovar as energias.";

const imagem = document.querySelector("img");
imagem.src = "https://picsum.photos/400/250?random=2";

const card = document.querySelector(".card");
card.classList.add("destaque");