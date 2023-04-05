# La Petra
#### _Doceria e confeitaria_
Versão simplificada do site da doceria La Petra, desenvolvido com a biblioteca React, com o objetivo de atender os pedidos de ovos de páscoa.

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
<img src="https://www.gstatic.com/devrel-devsite/prod/v8a94f…925fa3ba11417ee489de75/firebase/images/lockup.svg" height="28px" alt="firebase"/>

## Descrição
O projeto é uma *Single-Page Application* feita com componentes **React** e estilizados com CSS puro.

Foi utilizada a biblioteca [react-router-dom](https://reactrouter.com/en/main/start/tutorial) para permitir a nevagação entre as telas e a biblioteca [react-datepicker](https://reactdatepicker.com/) para fazer o input de escolha de data, na página *order*.

Os produtos foram salvos em um banco de dados do **Firebase** e foi utilizado o método *onValue* da plataforma, para buscar os produtos e mostrá-los em tela.

Na página de produtos foi feito um componente Grid, para que o tamanho dos cartões dos produtos fosse definido como uma propriedade do componenete. O valor dessas propriedades fica responsável por definir uma classe pré-definida no CSS, que só será ativada quando a tela estiver em determinado tamanho. Esse componente foi feito com base na lógica e padrões de classe do framework **Bootsrap**.

<img src="./src/assets/animation.gif" alt="gif"/>

## Instruções
A tela inicial (*home*) mostra os produtos do cardápio de Páscoa de 2023. O cabecalho da página é fixo e permite a navegação entre as rotas Produtos e Comprar.

A rota **Produtos** mostra também os produtos do cardápio de Páscoa de 2023 e quando o cliente clica em um dos produtos, surge um modal com a descrição e as opções de escolha para adicionar o produto à sacola de compras.

A rota **Comprar** mostra os produtos escolhidos, com suas respectivas cascas de chocolate e sabores. Logo abaixo tem um formulário para que o cliente insira seus dados, a forma de pagamento, a data de retirada do produto e uma opção para preencher o endereço de entrega, caso o cliente queira. Após clicar no botão de "Enviar Pedido", todos os dados dos produtos e os dados do cliente são armazenados em formato URL-encoded, para que o cliente seja redirecionado para o whatsapp da doceria e então envie o seu pedido formatado.

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
| [versão_0.2](https://la-petra-git-v02-pedropaivadev.vercel.app/) | Versão simplificada do site, para facilitar o acesso dos clientes ao cardápio de Páscoa de 2023. |

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[commits]: <https://github.com/PedroPaivaDev/la-petra/commits/main>