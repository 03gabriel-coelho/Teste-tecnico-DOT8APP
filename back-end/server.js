require('dotenv').config();
const app = require('./src/api');

const port = process.env.API_PORT;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo a porta ', port));

// comandos:
// - criar o banco de dados: npx sequelize db:create
// - criar tabelas o banco de dados: npx sequelize db:migrate
// - popular o banco de dados: npx sequelize db:seed:all
// - para fazer tudo isso utilize: npm run pre-start
// - rodar o servidor: npm start

