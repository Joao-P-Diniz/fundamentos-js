const tarefas = [
    "Estudar HTML",
    "Praticar CSS",
    "Aprender DOM",
    "Fazer projetos",
    "Conseguir emprego"
]

const lista = document.querySelector("#lista");
tarefas.forEach(tarefa=>{
    const quest = document.createElement("li");
    quest.textContent = tarefa;
    lista.appendChild(quest);
    quest.classList.add("tarefa");
});