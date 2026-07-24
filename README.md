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

Os arquivos HTML/CSS do `exercicio13/`, `exercicio15/`, `exercicio16/`, `exercicio17/` e `devforge/` podem ser abertos diretamente no navegador.

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
│   ├── package.json
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
│   ├── package.json
│   └── src/
│       ├── index.js                # entrada principal
│       └── services/
│           └── apiServices.js      # fetch: CRUD de usuários e posts
├── exercicio13/            # Páginas HTML + CSS
│   ├── artigo.html         # blog tech: artigo sobre HTML
│   ├── curriculo.html      # currículo pessoal
│   ├── curriculo.css       # estilos do currículo
│   ├── portfolio.html      # portfólio com projetos
│   ├── portfolio.css       # estilos do portfólio
│   ├── formulario.html     # formulário de contato
│   ├── formulario.css      # estilos do formulário
│   ├── exercicio5.html     # página com comentários sobre boas práticas HTML
│   ├── exercicio-problema.html # exercício de CSS (id vs class)
│   └── exercicio-problema.css  # estilos do exercício-problema
├── exercicio15/            # Layouts CSS com Flexbox
│   ├── navbar.html         # barra de navegação
│   ├── navbar.css
│   ├── layout.html         # layout com sidebar
│   ├── layout.css
│   ├── cards.html          # grid de cards
│   ├── cards.css
│   ├── centralizar.html    # card centralizado
│   ├── centralizar.css
│   ├── pricing.html        # planos de preços
│   └── pricing.css
├── exercicio16/            # Layouts CSS com Grid
│   ├── dashboard.html      # dashboard com grid areas
│   ├── dashboard.css
│   ├── galeria.html        # galeria de imagens responsiva
│   ├── galeria.css
│   ├── grade.html          # grade 3x4 com gradientes
│   ├── grade.css
│   ├── layout-areas.html   # layout com header/sidebar/main/footer
│   ├── layout-areas.css
│   ├── revista.html        # layout de revista/magazine
│   └── revista.css
├── exercicio17/            # Mobile First e responsividade
│   ├── cards-mobile-first.html   # cards refatorados mobile-first
│   ├── cards-mobile-first.css
│   ├── navbar-responsiva.html    # navbar que esconde links no mobile
│   ├── navbar-responsiva.css
│   ├── layout-responsivo.html    # layout header/conteudo/sidebar
│   ├── layout-responsivo.css
│   ├── tipografia.html           # tipografia fluida com clamp()
│   └── tipografia.css
└── devforge/               # Landing page institucional (projeto final)
    ├── index.html
    ├── css/
    │   └── style.css
    └── assets/
        ├── DF.png
        ├── DevForge.png
        └── DevForgeOriginal.png
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

### Páginas HTML + CSS — `exercicio13/`

| Arquivo | Descrição |
|---|---|
| `curriculo.html` + `curriculo.css` | Currículo pessoal com habilidades, formação e contato |
| `portfolio.html` + `portfolio.css` | Portfólio com seção de projetos e formulário de contato |
| `artigo.html` | Blog tech com artigo sobre como criar uma página HTML |
| `formulario.html` + `formulario.css` | Formulário de dados pessoais (nome, email, idade, cargo, mensagem) |
| `exercicio5.html` | Página com comentários sobre boas práticas de HTML semântico e acessibilidade |
| `exercicio-problema.html` + `exercicio-problema.css` | Exercício sobre especificidade CSS (id vs class) |

### Layouts CSS com Flexbox — `exercicio15/`

| Arquivo | Descrição |
|---|---|
| `navbar.html` + `navbar.css` | Barra de navegação com Flexbox |
| `layout.html` + `layout.css` | Layout com navbar, conteúdo principal e sidebar |
| `cards.html` + `cards.css` | Grid responsiva de cards com hover |
| `centralizar.html` + `centralizar.css` | Card centralizado na tela com gradiente |
| `pricing.html` + `pricing.css` | Página de planos de preços com CSS variables e responsividade |

### Layouts CSS com Grid — `exercicio16/`

| Arquivo | Descrição |
|---|---|
| `dashboard.html` + `dashboard.css` | Dashboard com `grid-template-areas` (nav, sidebar, cards, gráfico, tabela) |
| `galeria.html` + `galeria.css` | Galeria de imagens responsiva com `grid-template-columns: repeat(auto-fill, minmax(...))` |
| `grade.html` + `grade.css` | Grade 3x4 com 12 cards coloridos usando CSS variables para gradientes |
| `layout-areas.html` + `layout-areas.css` | Layout completo com `grid-template-areas` (header, sidebar, main, footer) |
| `revista.html` + `revista.css` | Layout de magazine com card principal em destaque (`grid-column: span 2`) |

### Mobile First e Responsividade — `exercicio17/`

| Arquivo | Descrição |
|---|---|
| `cards-mobile-first.html` + `.css` | Cards refatorados com Mobile First: 1 coluna (mobile), 2 (768px+), 4 (1024px+) |
| `navbar-responsiva.html` + `.css` | Navbar com links escondidos no mobile, visíveis a partir de 768px |
| `layout-responsivo.html` + `.css` | Layout com header, conteúdo e sidebar: coluna única → duas colunas |
| `tipografia.html` + `.css` | Tipografia fluida com `clamp()` em h1, h2 e p |

### Landing Page — `devforge/`

Projeto completo de landing page institucional para a empresa fictícia DevForge.

- **HTML5 semântico** com seções: hero, serviços, sobre, depoimentos, contato
- **CSS3 avançado**: variáveis (`:root`), flexbox, grid, animações (`@keyframes`), `backdrop-filter`, `::before`/`::after`
- **JavaScript vanilla**: menu hamburger mobile, sombra no header ao rolar
- **Responsivo**: abordagem Mobile First com breakpoints em 768px e 1024px
- **Google Fonts**: Inter
- **Assets**: logo e ícones em PNG
