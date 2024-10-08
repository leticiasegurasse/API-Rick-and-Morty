# Rick and Morty
Este projeto é uma aplicação web que consome a __Rick and Morty API__, desenvolvida utilizando React com componentes de classe e `styled-components` para a estilização. A aplicação permite que os usuários visualizem informações sobre os personagens da série Rick and Morty, com recursos de pesquisa e paginação.

## 📋Funcionalidades
- __Lista de Personagens:__ Os personagens são exibidos em uma lista, com nome e imagem.
- __Detalhes do Personagem:__ Ao clicar em um personagem, o usuário pode ver informações detalhadas, como status, espécie e gênero.
- __Pesquisa de Personagens:__ O usuário pode pesquisar personagens pelo nome.

## 🚀Tecnologias Utilizadas
- __React:__ Biblioteca JavaScript para construção da interface.
- __Styled-Components:__ Utilizado para estilização dos componentes.
- __Axios:__ Biblioteca para fazer requisições HTTP à API.
- __Rick and Morty API:__ Fonte dos dados sobre personagens.
- __Node.js & npm:__ Utilizados para gerenciar dependências e rodar scripts de desenvolvimento.
- __Surge:__ Serviço de deploy para hospedar o projeto de forma rápida e simples.

## ⚙️Instalação e Execução
__Pré-requisitos__

- __Node.js__ instalado em sua máquina.

__1. Clone o repositório:__
```
git clone https://github.com/leticiasegurasse/API-Rick-and-Morty.git
cd API-Rick-and-Morty
```
__2. Instale as dependências:__
```
npm install
```
__3. Execute o projeto:__
```
npm run start
```
__4. Acesse no navegador:__
```
http://localhost:3000
```

## 🌐Deploy
O deploy foi feito utilizando `Surge`, e a aplicação pode ser acessada no seguinte link:

[Surge](https://rick-and-foda.surge.sh/)

## 📑Funcionalidades Detalhadas
- __Detalhes de Personagens:__ Ao clicar em um personagem, uma nova página mostra detalhes como status (vivo, morto, desconhecido), espécie e gênero.
- __Pesquisa Dinâmica:__ A barra de pesquisa permite encontrar personagens rapidamente conforme o usuário digita.
- __Componentização:__ O código é organizado em componentes reutilizáveis, com lógica clara e separada para facilitar a manutenção e expansão da aplicação.

- ## 📂Estrutura de Arquivos
```
src/
│
├── components/
│   ├── CharacterCard.js   # Componente para exibir informações básicas do personagem
│   └── Footer.js          # Componente que exibe o rodapé do projeto
│
├── pages/
│   ├── DetailsPage.js     # Componente para exibir os detalhes dos personagens
│   └── HomePage.js        # Componente para exibir a página inicial
│
├── styles/
│   └── GlobalStyle.js     # Componente para estilização padrão das páginas
│
├── App.js                 # Componente principal da aplicação
└── index.js               # Arquivo de entrada da aplicação
```

## 📝Feito por
- __Leticia Segurasse__
- __Miguel Dutra__
- __Thiago Roncete__ 
#

