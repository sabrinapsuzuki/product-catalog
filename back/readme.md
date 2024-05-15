
# API Simples de Catálogo de Produtos | em desenvolvimento

Esta é uma API simples construída com Node.js e Express para fornecer informações sobre produtos a partir de um banco de dados simulado. Ela permite que os usuários obtenham detalhes de produtos específicos por meio de seus códigos.

## Instruções

Para começar a usar esta API, siga estas instruções:

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. Clone este repositório em sua máquina local usando o comando `git clone`.
3. Navegue até o diretório do projeto no terminal.
4. Instale as dependências do projeto executando `npm install`.
5. Após a instalação, você pode iniciar o servidor usando `npm start`.
6. O servidor estará disponível em `http://localhost:5000`.

## Pré-requisitos

Antes de executar esta API, você precisará ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em sua máquina.

## Endpoints

A API possui os seguintes endpoints:

- **GET /catalog/product/:code**: Retorna os detalhes de um produto com o código fornecido. Se o produto existir, ele retornará os detalhes em formato JSON. Se não, retornará um erro 404.
