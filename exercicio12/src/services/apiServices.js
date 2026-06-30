const BASE_URL = "https://jsonplaceholder.typicode.com";

export const buscarUsuarios = async () => {
    const resposta = await fetch(`${BASE_URL}/users`)
    if(!resposta.ok) throw new Error(`Erro: ${resposta.status}`);
    return resposta.json();
}

export const buscarUsuarioPorId = async (id) =>{
    const resposta =  await fetch(`${BASE_URL}/users/${id}`);
    if(!resposta.ok) throw new Error(`Usuário ${id} não encontrado`);
    return resposta.json();
}

export const buscarPostsDoUsuario = async (userId) =>{
    const resposta = await fetch(`${BASE_URL}/users/${userId}/posts`);
    if(!resposta.ok) throw new Error(`Posts do Usuário ${userId} não encontrado`);
    return resposta.json();
}

export const buscarTodosOsPosts = async () =>{
    const resposta = await fetch(`${BASE_URL}/posts`);
    if(!resposta.ok) throw new Error(`Posts não encontrado`);
    return resposta.json();
}

export const criarPost = async (title, body, userId) =>{
    const post = {
        title:title,
        body:body,
        userId:userId,
    }
    const resposta = await fetch(`${BASE_URL}/posts`,{
        method:"POST",
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(post)
    })
    if(!resposta.ok) throw new Error(`Erro ao criar o post: ${resposta.status}`)
    return resposta.json();
}

