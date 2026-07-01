# Fundamentos JS

Exercícios práticos de JavaScript para fixar conceitos fundamentais da linguagem.

## Pré-requisito

- [Node.js](https://nodejs.org/) (v18+ para suporte a `fetch` nativo)

## Como usar

```bash
# Executar um exercício avulso da raiz
node exercicio01.js

# Executar projeto modular (exercicio11 ou exercicio12)
cd exercicio11
node src/index.js
```

Os arquivos HTML do `exercicio13/` podem ser abertos diretamente no navegador.

## Estrutura do projeto

```
fundamentos-js/
├── exercicio01.js          # Variáveis, tipos, operadores
├── exercicio02.js          # Condicionais, switch, ternário
├── exercicio03.js          # Laços, arrays
├── exercicio04.js          # Funções, escopo
├── exercicio05.js          # Métodos de array
├── exercicio06.js          # Integração: aluno, pedidos, primos
├── exercicio07.js          # Objetos, destructuring, spread
├── exercicio09.js          # Closures, memoização
├── exercicio10.js          # Promises, async/await
├── exercicioRevisao.js     # map, filter, reduce
├── exercicio11/            # Projeto modular (ES Modules)
│   └── src/
│       ├── index.js                # entrada principal
│       ├── services/
│       │   └── usuarios.js         # criação de usuário com validação
│       └── utils/
│           ├── index.js            # re-export dos utilitários
│           ├── math.js             # soma, subtração, multiplicação, divisão, porcentagem
│           ├── validators.js       # validação de email, senha, idade
│           └── formatters.js       # formatação de moeda, data, nome
├── exercicio12/            # Consumo de API REST (JSONPlaceholder)
│   └── src/
│       ├── index.js                # entrada principal
│       └── services/
│           └── apiServices.js      # fetch: CRUD de usuários e posts
└── exercicio13/            # Páginas HTML
    ├── curriculo.html      # currículo pessoal
    ├── portfolio.html      # portfólio com projetos
    ├── artigo.html         # blog tech: artigo sobre HTML
    ├── formulario.html     # formulário de contato
    └── exercicio5.html     # página com comentários sobre boas práticas HTML
```

## Conteúdo detalhado

### Exercícios avulsos (raiz)

| Arquivo | Tópicos abordados |
|---|---|
| `exercicio01.js` | Variáveis (`let`/`const`), tipos (string, number, boolean), operadores aritméticos e comparação |
| `exercicio02.js` | Condicionais (`if/else if/else`, `switch`), operador ternário, truthy/falsy |
| `exercicio03.js` | Laços (`for`, `while`), `continue`, `break`, arrays |
| `exercicio04.js` | Funções (arrow function, `return` antecipado), escopo |
| `exercicio05.js` | Métodos de array (`push`, `forEach`, `slice`, `splice`, `find`, `indexOf`) |
| `exercicio06.js` | Funções com validações, lógica (aluno, soma pares, relatório salarial, primo, pedidos) |
| `exercicio07.js` | Objetos, destructuring, spread, `Object.entries`, `map`, `filter`, `reduce` |
| `exercicio09.js` | Closures (saudação, acumulador, validador), memoização, escopo `var` vs `let` |
| `exercicio10.js` | Promises, `async/await`, `Promise.all`, retry com tentativas |
| `exercicioRevisao.js` | Revisão: `map`, `filter`, `reduce`, encadeamento de métodos |

### Projeto modular — `exercicio11/`

Projeto em ES Modules que demonstra modularização com validação, operações matemáticas e formatação.

- **`utils/math.js`** — funções puras: `somar`, `subtrair`, `multiplicar`, `dividir`, `calcularPorcentagem`
- **`utils/validators.js`** — validadores: `validarEmail`, `validarSenha`, `validarIdade`
- **`utils/formatters.js`** — formatadores: `formatarMoeda` (pt-BR), `formatarData`, `capitalizarNome`
- **`services/usuarios.js`** — cria objetos de usuário com validação e ID único

### Consumo de API — `exercicio12/`

Consumo da API REST pública [JSONPlaceholder](https://jsonplaceholder.typicode.com) usando `fetch` nativo do Node.js 18+.

- `buscarUsuarios`, `buscarUsuarioPorId`
- `buscarPostsDoUsuario`, `buscarTodosOsPosts`
- `criarPost` (POST)
- Uso de `Promise.all` para paralelismo

### Páginas HTML — `exercicio13/`

| Arquivo | Descrição |
|---|---|
| `curriculo.html` | Currículo pessoal com habilidades, formação e contato |
| `portfolio.html` | Portfólio com seção de projetos e formulário de contato |
| `artigo.html` | Blog tech com artigo sobre como criar uma página HTML |
| `formulario.html` | Formulário de dados pessoais (nome, email, idade, cargo, mensagem) |
| `exercicio5.html` | Página com comentários sobre boas práticas de HTML semântico e acessibilidade |
