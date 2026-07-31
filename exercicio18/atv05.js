function adicionarTarefa(){
    const tarefa = document.querySelector("#tarefa")
    const lista = document.querySelector(".lista");
    const item = document.createElement("li");
    const botaoFechar = document.createElement("button");
    const caracterDoBotao = document.createTextNode("✕");
    const task = tarefa.value.trim();
    if(task == ""){
        alert("digite uma tarefa...");
        return;
    }

    item.textContent = task;

    lista.appendChild(item);
    
    item.appendChild(botaoFechar);
    
    botaoFechar.appendChild(caracterDoBotao);
    
    botaoFechar.onclick = ()=>{
        item.remove();
    }

    tarefa.value = "";
}
