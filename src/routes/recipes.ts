/** @format */

import { Express, Request, Response } from "express";
import multer from "multer";
import { conexao } from "../.config/database";

import { users } from "../.models/users";
import { recipes } from "../.models/recipes";

import { verifyToken } from "./middleware/Tokens";
import DelSecret from "./middleware/DeleteSecret";
import { NULL } from "sass";

export default function (app: Express) {
  conexao();

  app.get("/create", async function (req: Request, res: Response) {
    let { jwt, email } = req.cookies;

    let consulta = await users.findOne({
      Email: email,
    });

    if (consulta === null) {
      DelSecret(res);
      return res.send(`Não foi possivel encontrar o email ${email}`);
    }

    let result;

    try {
      result = verifyToken({
        analise_token: jwt,
        secret: consulta.JWT,
      });
    } catch (err) {
      console.error(err);
      return res.send(`Erro genérico`);
    }

    if (result.verified == false) {
      DelSecret(res);
      return res.send(`Não foi possivel assinar sua autenticação`);
    }

    let retorno = await recipes.find({ Email: email });

    console.log(retorno);

    res.render("create.ejs", { retorno });
  });

  const upload = multer({ dest: "./assets/Public/E" });

  app.post(
    "/create",
    upload.single("imagem"),
    async function (req: Request, res: Response) {
      let { titulo, descricao, porcoes, ingredientes, preparo } = req.body;

      let { jwt, email } = req.cookies;

      let consulta = await users.findOne({
        Email: email,
      });

      if (consulta === null) {
        DelSecret(res);
        return res.send(`Não foi possivel encontrar o email ${email}`);
      }

      try {
        let result = verifyToken({
          analise_token: jwt,
          secret: consulta.JWT,
        });
      } catch (err) {
        console.error(err);
        DelSecret(res);
        return res.send(`Não foi possível assinar o jwt`);
      }

      let lenthP = 200;

      if (descricao.length > lenthP) {
        //lembrar de adicionar data
        return res.send(
          `O comprimento da descrição é maior que o permitido. ${descricao.length} > ${lenthP}`,
        );
      }

      console.log(ingredientes);

      ingredientes = ingredientes.split(",");

      console.log(ingredientes);

      try {
        let gravar = await new recipes({
          Titulo: titulo,
          Email: email,
          Descricao: descricao,
          Porcoes: porcoes,
          Imagem: null,
          Ingredientes: ingredientes,
          Preparo: preparo,
        }).save();
      } catch (err) {
        console.log(err);
        return res.send("nem todos os campos foram preenchidos");
      }

      res.redirect("/create");
    },
  );

  app.post("/update", async function (req: Request, res: Response) {
    let dados = req.body;

    let { jwt, email } = req.cookies;

    let consulta = await users.findOne({
      Email: email,
    });

    if (consulta === null) {
      DelSecret(res);
      return res.send(`Não foi possivel encontrar o email ${email}`);
    }

    try {
      let result = verifyToken({
        analise_token: jwt,
        secret: consulta.JWT,
      });
    } catch (err) {
      console.error(err);
      DelSecret(res);
      return res.send(`Não foi possível assinar o jwt`);
    }

    console.log(dados.ingredientes);

    dados.ingredientes = dados.ingredientes.split(",");

    console.log(dados.ingredientes);

    try {
      let update = await recipes.findOneAndUpdate(
        {
          _id: dados._id,
          Email: email,
        },
        {
          Titulo: dados.titulo,
          Email: email,
          Descricao: dados.descricao,
          Porcoes: dados.porcoes,
          Imagem: dados.imagem,
          Ingredientes: dados.ingredientes,
          Preparo: dados.preparo,

          Alterado: true,
        },
      );
    } catch (err) {
      console.log(err);
      return res.send("campos essenciais não foram preenchidos");
    }

    res.redirect("/create");
  });

  app.post("/delete", async function (req: Request, res: Response) {
    let dados = req.body;

    let jwt = req.cookies.jwt;
    let email = req.cookies.email;

    let consulta = await users.findOne({
      Email: email,
    });

    if (consulta === null) {
      DelSecret(res);
      return res.send(`Não foi possivel encontrar o email ${email}`);
    }

    try {
      let result = verifyToken({
        analise_token: jwt,
        secret: consulta.JWT,
      });
    } catch (err) {
      console.error(err);
      DelSecret(res);
      return res.send(`Não foi possível assinar o jwt`);
    }

    let del = await recipes.findOneAndDelete({
      _id: dados._id,
      Email: email,
    });

    res.redirect("/create");
  });
}
