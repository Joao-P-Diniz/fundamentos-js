import { buscarPostsDoUsuario, buscarUsuarioPorId, buscarUsuarios, criarPost, buscarTodosOsPosts } from "./services/apiServices.js";

const listaDeUsuarios = await buscarUsuarios();
console.log(`Total de usuarios: ${listaDeUsuarios.length}`);

const usuarios = listaDeUsuarios;
usuarios.forEach((usuario) => {
    console.log(`Usuario: ${usuario.name}
        Email: ${usuario.email}`);
});

const usuariosComNet = usuarios.filter((usuario)=>usuario.email.endsWith(".net"));

usuariosComNet.forEach((usuario)=>{
    console.log(`Usuario: ${usuario.name}
        Email: ${usuario.email}`);
});

const [usuario,posts] = await Promise.all([
    buscarUsuarioPorId(5),
    buscarPostsDoUsuario(5)
]);

console.log(`Usuário: ${usuario.name}
    Total de posts: ${posts.length}`);

console.log("Títulos:");
posts.forEach((post,index)=>{
    console.log(`${index+1}. ${post.title}`)
});

const title = "Novo Post";
const body = "Corpo do post criado via API";
const userId = usuario.id;

const postCriado = await criarPost(title,body,userId);

console.log(`
    Post criado com sucesso!
    ID: ${postCriado.id}
    Título: ${postCriado.title}
    Corpo: ${postCriado.body}
    UserID:${postCriado.userId}
    `);

const [todosUsuarios,todosPosts] = await Promise.all([
    buscarUsuarios(),
    buscarTodosOsPosts()
])

const usuariosComPosts = todosUsuarios.map((usuario)=>{
    const postsDoUsuario = todosPosts.filter(post => post.userId===usuario.id);

    return{
        ...usuario,
        posts:postsDoUsuario
    };
});

usuariosComPosts.forEach((usuario) => {
    console.log(`\nUsuário: ${usuario.name}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Posts: ${usuario.posts.length}`);

    usuario.posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
    });
});