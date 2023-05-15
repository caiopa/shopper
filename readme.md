Obs: aplicaçao foi feita com banco de dados em docker 

certifiquei-se que a porta do 3306 padrao do MySql esteja fora, caso ja esteje on pode usar o mesmo

Primeiro
caso ja tenha pule esta etapa
Para iniciar a aplicção com docker, de um docker compose up na raiz do projeto 
conect no bando de dados do MySQL pelo worckbanch ou pelo Database do vscode

Segundo
entre na raiz do projeto backend de um npm install
depois de um npm run db:reset para criar o banco de dados
depois npm run start

Terceito 
va na raiz fronend de um npm install
npm run build
e inicie a aplicação npm run dev
