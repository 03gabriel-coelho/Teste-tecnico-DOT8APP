# Teste-tecnico-DOT8

## Sobre o projeto

Respositório para a disposição da aplicação requirida pelo Teste técnico da empresa DOT8.

### Tecnológias utilizadas no FRONT-END

#### - React.js
#### - React Context
#### - ESLint

### Tecnológias utilizadas no BACK-END

#### - Node.js
#### - Body Parser
#### - DotEnv
#### - Express
#### - Mysql2
#### - Sequelize

## Instalação e iniciando a aplicação

!!! Será preciso ter os pacotes npm, npx, node e mysqlServer instalados em sua maquina !!!

- Clone o repositório através da seguinte chave https: `git@github.com:03gabriel-coelho/Teste-tecnico-DOT8APP.git`

### BACK-END

- Entre no diretório nomeado como `back-end`

- Instale as dependências, utilizando `npm install`

- Entre no diretório `src` e modifique o arquivo `.envEXAMPLE` com as portas e saidas da sua máquina

!!! Não se esqueça de retirar o `EXAMPLE` do seu nome !!!

- Com o mysqlServer ativado utilize o comando `npm run pre-start` para popular o banco em sua máquina

- Utilize o comando `npm start` para ativar o servidor e disponibilizar a API

### FRONT-END

- Abra outra aba do seu terminal

- Entre no diretório nomeado como `front-end`

- Instale as dependências, utilizando `npm install`

- Utilize o comando `npm start` para iniciar a aplicação em seu navegador

## Explicação da aplicação

### Tela Home

A tela home tem o intuito de redirecionar o usuário para as suas devidas funcionalidades, seja elas, ir para a tela de cadastro, ir para a tela de listagem de cadastros e ir para a tela (ou footer) sobre o usuário. Além de apresentar uma ótima primeira impressão e estética para o usuário.

![TelaHome](./pics/picOne.png)

### Tela de cadastro 

A tela de cadastro tem o intuito de coletar informações sobre o usuário com as suas respectivas trativas de erro e formatações, sendo esses dados, o nome, o email, a data de nascimento e o telefone.

![TelaRegistration]('./pics/picTwo.png')

### Tela de listagem de cadastros

A tela de listagem dos cadastros tem o intuito de informar e disponibilizar dados de alguns de seus cadastros amarzenados no banco de dados.

![TelaList]('.pics/picThree.png')

### Tela de informações sobre o usuário (ou footer)

A tela de informações sobre o usuário tem o intuito de disponibilizar as informações sobre o usuário que acabou de se cadastrar

![TelaAboutMe]('.pics/picFour.png')
