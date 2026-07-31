function adicionarTarefa(){
    const tarefa = document.querySelector("#tarefa")
    const lista = document.querySelector(".lista");
    const item = document.createElement("li");
    const span = document.createElement("span");
    const botaoFechar = document.createElement("button");
    const task = tarefa.value.trim();
    if(task == ""){
        alert("digite uma tarefa...");
        return;
    }

    span.textContent = task;

    botaoFechar.textContent = "✕";

    item.appendChild(span);
    item.appendChild(botaoFechar);
    lista.appendChild(item);

    botaoFechar.onclick = ()=>{
        item.remove();
    }

    tarefa.value = "";
}
