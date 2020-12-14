# PipedriveToBling

![badge](https://img.shields.io/badge/Typescript-4.1.12-blue)
[![node version](https://img.shields.io/node/v/react-native)](https://img.shields.io/node/v/react-native)

### Projeto NodeJs, desenvolvido totalmente em Typescript, que tem como objetivo buscar "deals" no sistema do Pipedrive e, a partir desses dados, gerar pedidos no sistema da Bling. Todos os deals recuperados são salvos em um banco de dados não relacional MongoDB

### Para facilitar a visualização do projeto funcionando, foi feito deploy no heroku. Pode-se ver o funcionamento através dos seguintes endpoints:

* Endpoint para a API buscar deals no Pipedrive e salvá-los no MongoDB e criar pedidos no Bling:

    https://pipedrive-bling.herokuapp.com/pipedrive

* Endpoint para receber todos os dados salvos no MongoDB:

    https://pipedrive-bling.herokuapp.com/bling

# Clone este repositório
$ git clone <https://github.com/antonioadami/PipedriveToBling>

# Acesse a pasta do projeto no terminal/cmd
$ cd PipedriveToBling

# Instale as dependências
$ npm install 
    ou 
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
    ou
$ yarn dev

# O servidor inciará na porta:3333
   Acesse <http://localhost:3333>
   
   
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986516&gclid=CjwKCAiAlNf-BRB_EiwA2osbxXazL16Hks5HnYigK-LVxAKPTFfdxuiWeMIeF4Jdd3l0epErTu8GCBoCq1EQAvD_BwE)
