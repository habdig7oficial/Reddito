/** @format */

import express from "express";
import helmet from "helmet"; /* Lib pra proteger o site contra vunerabilidades conhecidas, recomendado pela documentação: https://expressjs.com/pt-br/advanced/best-practice-security.html */
import compression from "compression"; /* Lib pra melhorar a performace com o gzip comprimindo dados, recomendado pela documentação: https://expressjs.com/pt-br/advanced/best-practice-performance.html*/
import cookieParser from "cookie-parser"; /* Lib para trabalhar com cookies para aumentar a segurança */
import cors from "cors"; /* Lib para trabalhar como api para requisições externas */

/* Importando Rotas manuamente */
import index from "../routes/index";
import registro from "../routes/registro";
import login from "../routes/login";
import recipes from "../routes/recipes";
import gallery from "../routes/gallery";
import error from "../routes/error";
import map from "../routes/map";
import termos from "../routes/termos";
import detalhes from "../routes/detalhes";

const app = express(); /* Instanciando o express */
const port = process.env.PORT || 7777; /* Definindo a porta de execução */

app.use(helmet()); /* Utilizando a lib do helmet */
app.use(compression()); /* Utilizando a lib compression */
app.use(cookieParser()); /* Utilizando a lib cookieParser */

/*
inutil sem api

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  }),
);
*/

app.set("views", "./src/EJS"); /* Alterando a pasta padrão views para a EJS */

app.use(
  express.urlencoded({ extended: false }),
); /* Setando um parseador de Json */

let statics = [
  app.use(
    express.static("./src/assets"),
  ) /* Setando a pasta assets para servir arquivos estáticos */,
];

let routes = [
  index(app),
  registro(app),
  login(app),
  recipes(app),
  gallery(app),
  detalhes(app),
  termos(app),
  map(app), //lembrar de deletar
  error(app),
]; /* Executando todas a rotas e passando o express para cada uma */

export { app, port }; /* Exportando variáveis */

console.log(__dirname);
