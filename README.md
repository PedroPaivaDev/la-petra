# La Petra
#### _Doceria e confeitaria_
Site da doceria La Petra, desenvolvido com a biblioteca React.

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## Descrição
O projeto é uma *Single-Page Application* feita com componentes **React** e estilizados com CSS puro.

Foi utilizada a biblioteca [react-router-dom](https://reactrouter.com/en/main/start/tutorial) para permitir a nevagação entre as telas e a biblioteca [react-slick](https://react-slick.neostack.com/docs/get-started) para fazer o carrossel de imagens da *home*.

<img src="./src/assets/animation.gif" alt="gif"/>

## Instruções
A tela inicial (*home*) é um carrossel apresentando imagens de produtos da doceria, assim como as produções sazonais destinadas a eventos como páscoa, dia dos namorados e natal. Ainda na tela incial, clicando no ícone da logomarca, o cliente será direcionado para a rota *about*, onde é descrita a história de como surgiu a *La Petra*. O cabecalho da página é fixo e permite a navegação entre as rotas Produtos e Comprar.

A rota **Produtos** mostra uma página com os doces produzidos diariamente e quando o cliente clica em um dos produtos, surge um modal com a imagem ampliada e a descrição dos ingredientes.

A rota **Comprar** mostra uma página com o horário de funcionamento da doceria, a localização e os links para acessar os canais de compra: Goomer (que não cobra taxas adicionais) e o IFood. Para fazer encomendas de bolos o cliente deve usar o whatsapp, descrevendo com mais detalhes o que deseja para o bolo.

> Caso você seja um desenvolvedor, use as instruções abaixo para instalar as dependências e sugerir alterações para a aplicação.

É possível verificar o conteúdo de cada versão, selecionando a *branch* específica e o histórico de [commits].

Após baixar o projeto deste repositório, dentro do diretório do projeto você deve usar o comando `npm install` em um terminal, para gerar a pasta **node_modules**.
```sh
npm install
```
Concluída a instalação das dependências do projeto, use o comando `npm start` para visualizar a aplicação na porta [localhost:3000](http://localhost:3000).
```sh
npm start
```
A página irá recarregar a cada alteração feita no código e mostrará eventuais erros no console.

## Histórico de versões

Clique nas versões abaixo, para observar a evolução do projeto ao longo do tempo.

| Versão | Update |
| ------ | ------ |
| [versão_0.1](https://la-petra-git-v01-pedropaivadev.vercel.app/) | Primeira versão do projeto. |
| [versão_0.2](https://la-petra-git-v02-pedropaivadev.vercel.app/) | Em construção... |

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[commits]: <https://github.com/PedroPaivaDev/la-petra/commits/main>