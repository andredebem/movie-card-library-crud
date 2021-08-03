# Boas-vindas ao repositório do projeto de Movie Cards CRUD!

Aqui você vai encontrar todos os detalhes de como usufruir do que foi desenvolvido.

Para reforçar e aperfeiçoar o aprendizado em React, o objetivo era criar um **CRUD** de cartões de filmes.

A sigla **CRUD** significa, _Create, Read, Update and Delete_:

  - Adicionar um novo filme à lista - **CREATE**;
  - Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - **READ**;
  - Editar um filme da lista - **UPDATE**;
  - E apagar um filme da lista - **DELETE**;

# Sumário

- [Habilidades](#habilidades)
- [Desenvolvimento](#desenvolvimento)
- [Instruções](#instruções)
  - [Para visualizar o projeto](#para-visualizar-o-projeto)
  - [Commits](#commits)
  - [Linter](#linter)
  - [Testes](#testes)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos Obrigatórios:`
    - [1 - Renderize BrowserRouter no componente App usando rotas](#1-renderize-browserrouter-no-componente-app-usando-rotas)
    - [2 - Faça uma requisição para buscar e mostrar a lista de filmes quando MovieList for montado](#2-faça-uma-requisição-para-buscar-e-mostrar-a-lista-de-filmes-quando-movielist-for-montado)
    - [3 - Insira um link para a página de detalhes de um filme dentro de MovieCard](#3-insira-um-link-para-a-página-de-detalhes-de-um-filme-dentro-de-moviecard)
    - [4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de Movie Details](#4-faça-uma-requisição-para-buscar-o-filme-que-deverá-ser-renderizado-dentro-de-movie-details)
    - [5 - Realize uma requisição para buscar o filme que será editado em EditMovie](#5-realize-uma-requisição-para-buscar-o-filme-que-será-editado-em-editmovie)
    - [6 - Insira um link na página inicial para NewMovie para criar novos cartões](#6-insira-um-link-na-página-inicial-para-newmovie-para-criar-novos-cartões)
        
    `Requisitos Bônus:`
    - [7 - Adicione um link para deletar um cartão em MovieDetails](#7-adicione-um-link-para-deletar-um-cartão-em-moviedetails)

- [Avisos Finais](#avisos-finais)

# Habilidades

Tive que demonstrar conhecimento suficiente para:

- Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;
- Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;
- Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado;
- Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;
- Utilizar o componente BrowserRouter corretamente;
- Criar links de navegação na aplicação com o componente Link ;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route ;
- Estruturar e organizar as rotas da sua aplicação com o componente Switch ;
- Usar o componente Redirect pra alternar entre rotas.

# Desenvolvimento

Nos últimos projetos, por mais que o App tenha sido desenvolvido utilizando múltiplos componentes, o que é uma boa prática, todas as funcionalidades eram acessadas ao mesmo tempo, no mesmo lugar, utilizando apenas uma URL (`localhost:3000`, normalmente). Na mesma página onde havia a listagem de filmes, havia um formulário pra criar um novo filme, por exemplo. À medida que seus apps se tornarem maiores e mais complexos, isso se tornará inviável. Desta vez, as funcionalidades do app foram agrupadas e organizadas em rotas.

Uma rota define o que deve ser renderizado na página ao abri-la. Cada rota está associada a um caminho. O caminho é a parte da URL após o domínio (nome do site, de forma simplificada). Por exemplo, em `www.site.com/projetos/meu-jogo`, o caminho é `/projetos/meu-jogo`.

Este app tem 4 rotas:

1. A rota raiz (index), no caminho `/`. Esta rota exibe uma lista com todos os filmes cadastrados.

2. Uma rota para criar novos filmes, no caminho `/movies/new`. Essa rota renderiza um formulário para adicionar um novo filme.

3. Uma rota para mostrar informações detalhadas de um filme, no caminho `/movies/:id`. Onde o `:id` é o parâmetro da URL que representa o _id_ do filme exibido. Por exemplo, ao entrar no caminho `/movies/5`, serão exibidas informações sobre o filme com _id_ `5`.

4. Uma rota para editar um filme, no caminho `/movies/:id/edit`. Assim como na rota 3, `:id` é o _id_ do filme a ser editado. Essa rota renderiza um formulário idêntico ao da rota 2. Nesse caso, porém, o formulário virá preenchido com as informações do filme a ser editado. Ao submeter o formulário, ao invés de criar um novo filme, o filme em questão tem seus dados atualizados.

Relacionado a cada rota há um componente React responsável por renderizar seu conteúdo. Esse mapeamento entre o caminho da URL, rota e componente foi feito pelo `React Router`, a principal biblioteca de roteamento em `React`.

Outra diferença importante neste projeto em relação aos anteriores é que os dados vêm de uma API (simulada) e não mais de um arquivo estático. É através dessa API que é possível criar, ler, atualizar e apagar filmes. Da mesma forma, foi necessário lidar com requisições assíncronas e _promises_. Também foi feito uso de _lifecycle methods_ e de estados para controlar o que é renderizado por seus componentes a depender de em que momento as requisições se encontram.

---

# Instruções:

## PARA VISUALIZAR O PROJETO:

1. Clone o repositório
  * `git clone git@github.com:andredebem/starwars-planets-search.git`.
  * Entre na pasta do repositório que você acabou de clonar;

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página já com o projeto deve abrir no seu navegador)

OU

_🚧 EM CONSTRUÇÃO 🚧_

---

### COMMITS

* Os `commits` representam as alterações que foram feitas no código regularmente.

---

### Linter

Para garantir a qualidade do código, foi utilizado o linter _ESLint_. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção.

---

### Testes

Todos os requisitos do projeto são testados **automaticamente**. Cada componente possui vários requisitos e os testes para cada requisito de um componente estão no arquivo de teste correspondente.

_**Por exemplo**: Os requisitos relacionados à página `EditMovie` estão no arquivo `EditMovie.test.js`._

Para executar os testes localmente, digite no terminal o comando `npm test`.

---

## Requisitos do projeto

### 1 - Renderize `BrowserRouter` no componente `App` usando rotas

Você deve utilizar um `BrowserRouter` pra criar as rotas da sua aplicação. As urls de cada página devem ser desenvolvidas conforme especificado na seção _O que será desenvolvido_.

#### O que será verificado:

- Será validado se a rota `/` renderiza a página MovieList

- Será validado se a rota `/movies/:id` renderiza a página MovieDetails

- Será validado se a rota `/movies/new` renderiza a página NewMovie

- Será validado se a rota `/movies/:id/edit` renderiza a página EditMovie

- Será validado se qualquer rota não declarada renderiza a página NotFound


### 2 - Faça uma requisição para buscar e mostrar a lista de filmes quando `MovieList` for montado 

Para buscar a lista, você deve utilizar a função `getMovies` importada do módulo `movieAPI` em `MovieList`. Essa função retorna uma _promise_. A requisição deve ser feita no momento em que o `MovieList` for montado no DOM. Enquanto a requisição estiver em curso, `MovieList` deve renderizar o componente `Loading`, como ilustrado na imagem a seguir.

![image](loading.png)

Obs: O componente `Loading` deve conter o texto `Carregando...`

Uma vez que a requisição retornar, o resultado deve ser renderizado. Para cada filme, renderize um componente `MovieCard`, como ilustrado abaixo.

![image](index.png)

Você precisará adicionar um estado em `MovieList` para controlar o que será exibido.


#### O que será verificado:

- Será validado se a página `MovieList` exibe o texto `Carregando...` enquanto estiver fazendo a requisição

- Será validado se a página `MovieList` exibe um `MovieCard` para cada filme retornado pela API


### 3 - Insira um link para a página de detalhes de um filme dentro de `MovieCard`

Todos os `MovieCard`s devem possuir em seu conteúdo, pelo menos, o título, a sinopse e um link com o texto "VER DETALHES" que aponta para a rota `movies/:id`, onde `:id` é o id do filme. Esta rota exibirá informações detalhadas de um filme.

#### O que será verificado:

- Será validado se cada `MovieCard` exibe pelo menos o título e a sinopse de seu respectivo filme

- Será validado se cada `MovieCard` contém um link com o texto `VER DETALHES` que redireciona para a página de detalhes do filme


### 4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de `Movie Details`

`MovieDetails` se comporta de forma muito semelhante ao `MovieList`. Ao ser montado, deve fazer uma requisição utilizando a função `getMovie`, se atente para o nome da função que é muito semelhante ao de outra função que já utilizamos, a `getMovies`, do módulo `movieAPI`, passando o id do filme. O componente `Loading` deve ser renderizado enquanto a requisição estiver em curso. Após terminar, deve-se renderizar um card com mais detalhes sobre o filme, contendo:

  - Uma `<img>` com a imagem do filme e `alt='Movie Cover'`;
  - Título;
  - Subtítulo;
  - Sinopse;
  - Gênero;
  - Avaliação;
  - um link com o texto "EDITAR" apontando para a rota `/movies/:id/edit` e um link apontando para a rota raiz (`/`) com o texto "VOLTAR".

Os campos devem existir no cartão conforme ilustrado na imagem abaixo.

#### O que será verificado:

- Será validado se `MovieDetails` exibe o texto "Carregando..." enquanto estiver fazendo a requisição

- Será validado se `MovieDetails` exibe o título, o subtítulo, a sinopse, a imagem e o gênero do filme

- Será validado se `MovieDetails` contém um botão com o texto "VOLTAR" que redireciona para a página inicial

- Será validado se `MovieDetails` contém um botão com o texto "EDITAR" que redireciona para a página de edição de filme

![image](card-details.png)

### Para os requisitos 5 e 6:

Para correta avaliação, os campos do formulário devem possuir as seguintes tags `<label>` e  tipos de entrada:
- label: 'Título', entrada: tag `<input>` de tipo 'text'
- label: 'Subtítulo', entrada: tag `<input>` de tipo 'text'
- label: 'Imagem', entrada: tag `<input>` de tipo 'text'
- label: 'Sinopse', entrada: tag `<textarea>`
- label: 'Gênero', entrada: tag `<select>`, com as seguintes opções:
    - `<option value="action">Ação</option>`
    - `<option value="comedy">Comédia</option>`
    - `<option value="thriller">Suspense</option>`
    - `<option value="fantasy">Fantasia</option>`
- label: 'Avaliação', entrada: tag `<input>`, de tipo 'number' com valores que vão de 0 (mínimo) a 5 (máximo), com um step de 0.1.

Obs: O conteúdo das tags `<label>` devem estar idênticos ao específicado acima. Importante associar corretamente todas as suas entradas e labels!

### 5 - Realize uma requisição para buscar o filme que será editado em `EditMovie`

Ao ser montada, a página de edição do filme deve fazer uma requisição pra buscar o filme que será editado e deve, ao ter seu formulário submetido, atualizar o filme e redirecionar a página pra rota raíz.

#### O que será verificado:

- Será validado se `EditMovie` exibe o texto "Carregando..." enquanto estiver fazendo a requisição
- Será validado se `EditMovie` contém um formulário preenchido com o título, subtítulo, sinopse, caminho da imagem e gênero do filme selecionado

- Será validado se, ao clicar no botão de submit, uma requisição para API é feita e o filme selecionado é atualizado. Após a conclusão da atualização a pessoa usuária deve ser redirecionada para a página inicial


### 6 - Insira um link na página inicial para `NewMovie` para criar novos cartões

O link deve conter o texto "ADICIONAR CARTÃO" e apontar para a rota `/movies/new`, contendo um formulário para criar novos cartões.

Na rota `/movies/new`, utilizando a callback passada para `MovieForm`, `NewMovie` deve criar um novo cartão utilizando a função `createMovie` do módulo `movieAPI`. Após o fim da requisição, `NewMovie` deve redirecionar o app para a página inicial, contento o novo cartão.

#### O que será verificado:

- Será validado se a página inicial contém um link "ADICIONAR CARTÃO". Esse link deve redirecionar para a página de criação de filmes

- Será validado se `NewMovie` contém um formulário que faz uma requisição para API para criar um novo filme. Após a criação, a pessoa usuária deverá ser redirecionada para a página inicial


#### Requisitos bônus:

### 7 - Adicione um link para deletar um cartão em `MovieDetails`

Ao clicar neste link, faça uma requisição utilizando a função `deleteMovie` do módulo `movieAPI`. Após finalizar a requisição, redirecione o app para a página inicial. O cartão apagado não deverá mais se encontrar na lista.

#### O que será verificado:

- Será validado se `MovieDetails` contém um link com o texto "DELETAR"

- Será validado se o link "DELETAR" faz uma requisição para a API para excluir o filme em questão

---

# Avisos finais

Ficou com alguma dúvida?

Sem problemas... Basta entrar em contato comigo!!

---
