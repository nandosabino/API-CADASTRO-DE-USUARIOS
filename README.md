# 🧾 Cadastro de Usuários com Autenticação (Node.js + Express + MongoDB)
Este projeto é uma API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB**, que permite realizar operações de **cadastro**, **login com autenticação JWT**, e **CRUD de usuários**. Ideal para aplicações que exigem um sistema de gerenciamento seguro de usuários.
## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **MongoDB (via Mongoose)**
- **JWT (JSON Web Token)**
- **Postman (testes)**
- **Dotenv**
- **Bcrypt.js** (hash de senha)
- **Cors & Helmet** (segurança)
## 📦 Funcionalidades

- [x] Cadastro de novos usuários
- [x] Autenticação com JWT
- [x] Login com validação de senha criptografada
- [x] Listagem de usuários (rota protegida)
- [x] Atualização de dados do usuário
- [x] Exclusão de usuários
- [x] Middleware de autenticação
- [x] Boas práticas de Clean Code e organização em camadas

## 🧠 Estrutura do Projeto
📁 src
┣ 📂controllers
┣ 📂models
┣ 📂routes
┣ 📂middlewares
┣ 📂config
┣ 📜server.js
┗ 📜.env
