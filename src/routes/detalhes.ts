/** @format */

import { Express, Request, Response } from "express";
import { conexao } from "../.config/database";
import { recipes } from "../.models/recipes";

import { root } from "../.config/multer";

export default function (app: Express) {
  conexao();
  app.get("/receita", async function (req: Request, res: Response) {
    let { id } = req.query;

    let retorno;

    try {
      retorno = await recipes.findOne({
        _id: id,
      });
    } catch (err) {
      console.log(err);
    }
    console.log(id);
    console.log(retorno);

    if (retorno != null && retorno != undefined) {
      if (retorno.Imagem === undefined || retorno.Imagem === undefined) {
        retorno.Imagem = "";
      } else {
        retorno.Imagem = retorno.Imagem?.replace(root, "");
      }
    } else {
      return res.redirect(`/err?${id}`);
    }

    res.render("receita.ejs", { retorno });
  });
}
