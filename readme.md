## Seja bem vindo ao App Shopper

O projeto foi desenvolvido em Next com Typescript, React e Node com Express e Sequielize
Realizado com arquitetura Model, Service e Controller(MSC) no Backend

### Orientações para testar

!import (Ter o DOCKER e NODE instalados)

 1. Clone o repositório `git clone git@github.com:caiopa/shopper.git`
 2. Rode o docker compose na raiz do projeto
 3. Na raiz do projeto de um `docker compose up --build` para subir a imagem do MySQL
 4. Configure as variáveis de ambiente se necessário:  MYSQL_DATABASE: `shopperDB` e conect-se pelo workbench ou vscode

**Back-end**
 1. Na raiz pasta raiz do projeto`Backend` de um `npm install`
 2. Para criar o banco de dados de um `npm run db:reset`
 3. E por ultimo `npm start`

**Front-end**
 1. Na raiz pasta raiz do projeto`Frontend` de um `npm install`
 2. Build o projeto `npm run build`
 3. E por ultimo `npm run dev`

<details>
<summary> 🔰 Funcionabilidade </summary><br />
 
 1. É possivel ver os produtos na pagina inicial vindo do banco de dados
 2. É possivel editar qualquer produto existente no banco de dados (validações com zod)
 3. É possivel registrar um novo produto (validações com zod)
 4. É possivel editar os produtos pelo input se enviado um arquivo correto (2 colunas sendo code e new_price)(Não foi Feito validação)
 Obs: Para conseguir editar pelo arquivo csv o arquivo precisa esta dentro da pasta `shopper/frontend/src/app/file/`


</details><br />
