/** @format */

import { Express, Request, Response } from "express";
import { conexao } from "../.config/database";
import { recipes } from "../.models/recipes";

import { root } from "../.config/multer";

export default function (app: Express) {
  conexao();
  app.get("/galeria", async function (req: Request, res: Response) {
    let retorno = await recipes.find();

    /* console.log(retorno); */

    for (let i = 0; i < retorno.length; i++) {
      if (retorno[i].Imagem === undefined) {
        retorno[i].Imagem = "";
      } else {
        retorno[i].Imagem = retorno[i].Imagem?.replace(root, "");
      }
    }

    res.render("gallery.ejs", { retorno });
  });
}
