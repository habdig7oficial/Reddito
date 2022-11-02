/** @format */

import type { Express, Request, Response } from "express";
import { conexao } from "../.config/database";

import { M_conf, root } from "../.config/multer";
import { users } from "../.models/users";
import { recipes } from "../.models/recipes";

import { verifyToken } from "./middleware/Tokens";
import DelSecret from "./middleware/DeleteSecret";
import GabargeCollector from "./middleware/GabargeCollector";

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
      return res.redirect("/login");
    }

    /*
    let retorno = await recipes.find({ Email: email });
    */

    /* console.log(retorno); */

    /*
    for (let i = 0; i < retorno.length; i++) {
      if (retorno[i].Imagem === undefined) {
        retorno[i].Imagem = "";
      } else {
        retorno[i].Imagem = retorno[i].Imagem?.replace(root, "");
      }
    }
    */

    res.render("create.ejs" /*{ retorno }*/);
  });

  app.get("/minhas-receitas", async function (req: Request, res: Response) {
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
      return res.redirect("/login");
    }

    let retorno = await recipes.find({ Email: email });

    /* console.log(retorno); */

    for (let i = 0; i < retorno.length; i++) {
      if (retorno[i].Imagem === undefined) {
        retorno[i].Imagem = "";
      } else {
        retorno[i].Imagem = retorno[i].Imagem?.replace(root, "");
      }
    }

    res.render("minhas-receitas.ejs", { retorno });
  });

  app.post(
    "/create",
    M_conf.single("imagem"),
    async function (req: Request, res: Response) {
      let { titulo, descricao, porcoes, ingredientes, preparo } = req.body;

      let { jwt, email } = req.cookies;

      let path;
      if (
        req.file?.destination == undefined ||
        req.file?.filename == undefined
      ) {
        path = "";
      } else {
        path = `${req.file.destination}/${req.file.filename}`;
      }
      console.log(path);

      titulo.trim();
      descricao.trim();
      porcoes.trim();
      ingredientes.trim();
      preparo.trim();

      let consulta = await users.findOne({
        Email: email,
      });

      if (consulta === null) {
        DelSecret(res);
        await GabargeCollector(path);
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
        console.log(path);
        await GabargeCollector(path);
        return res.send(`Não foi possível assinar o jwt`);
      }

      let lenthP = 200;

      if (descricao.length > lenthP) {
        await GabargeCollector(path);
        //lembrar de adicionar data
        return res.send(
          `O comprimento da descrição é maior que o permitido. ${descricao.length} > ${lenthP}`,
        );
      }

      /*console.log(ingredientes);*/

      ingredientes = ingredientes.split(",");

      /*console.log(ingredientes);*/

      try {
        let gravar = await new recipes({
          Titulo: titulo,
          Email: email,
          Descricao: descricao,
          Porcoes: porcoes,
          Imagem: path,
          Ingredientes: ingredientes,
          Preparo: preparo,
        }).save();
      } catch (err) {
        console.log(err);
        await GabargeCollector(path);
        return res.send("nem todos os campos foram preenchidos");
      }

      console.log(req.file);
      res.redirect("/create");
    },
  );

  app.post("/update", async function (req: Request, res: Response) {
    let { _id, titulo, descricao, porcoes, ingredientes, preparo } = req.body;

    let { jwt, email } = req.cookies;

    let consulta = await users.findOne({
      Email: email,
    });

    let path = "";

    if (req.file?.path != undefined || req.file?.path != null) {
      path = req.file?.path;
    }

    if (consulta === null) {
      DelSecret(res);
      await GabargeCollector(path);
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
      await GabargeCollector(path);
      return res.send(`Não foi possível assinar o jwt`);
    }

    /*console.log(dados.ingredientes);*/

    ingredientes = ingredientes.split(",");

    /*console.log(dados.ingredientes);*/

    try {
      let update = await recipes.findOneAndUpdate(
        {
          _id: _id,
          Email: email,
        },
        {
          Titulo: titulo,
          Email: email,
          Descricao: descricao,
          Porcoes: porcoes,
          Imagem: path,
          Ingredientes: ingredientes,
          Preparo: preparo,

          Alterado: true,
        },
      );
    } catch (err) {
      console.log(err);
      return res.send("campos essenciais não foram preenchidos");
    }

    //await GabargeCollector(await recipes.findOne());

    res.redirect("/create");
  });

  app.post("/delete", async function (req: Request, res: Response) {
    let { _id } = req.body;

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

    let del = await recipes.findOneAndDelete({
      _id: _id,
      Email: email,
    });

    let Imagem: string | null = await recipes.findOne({
      _id: _id,
      Email: email,
    });

    //await GabargeCollector()

    res.redirect("/minhas-receitas");
  });
}
