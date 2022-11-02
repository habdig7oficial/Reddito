/** @format */

import { conexao } from "../.config/database.mjs";
import argon2 from "argon2";
import { users } from "../.models/users.mjs";



export default function (app) {
  conexao();

  app.get("/registro", async function (req, res) {
    let cas = await users.find();
    console.log(cas);
    res.render("registro.ejs", {});
  });

  app.post("/registro", async function (req, res) {
    let dados = req.body; /* Requisita dados do body */

    /* Remove espaços denescessários */
    dados.nome = dados.nome.trim();
    dados.email = dados.email.trim();
    dados.password = dados.password.trim();
    dados.confirm = dados.confirm.trim();

    /* Verifica se ele já está cadastrado */
    let exists = await users.findOne({
      Email: dados.email,
    });

    if (exists != null) {
      return res.send(`O email ${dados.email} já foi cadastrado`);
    }

    /* Verifica se a senha e a confirmação batem */
    if (dados.password !== dados.confirm) {
      return res.send(`A senha e sua confirmação não batem`);
    }

    /* Encripitando data crítica */
    try {
      dados.password = await argon2.hash(dados.password);
    } catch (err) {
      console.error(err);
      return res.send(`Algum erro aconteceu`);
    }

    /* Efetivamente registra o usuário */
    let cadastro = await new users({
      Nome: dados.nome,
      Email: dados.email,
      Password: dados.password,
    }).save();

    res.redirect("/login");
  });
}