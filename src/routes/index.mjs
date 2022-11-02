/** @format */


import { conexao } from "../.config/database.mjs";

import { recipes } from "../.models/recipes.mjs";
import { root } from "../.config/multer.mjs";

export default function (app) {
  conexao();

  app.get("/", async function (req, res) {
    let retorno = await recipes.find().sort();

    for (let i = 0; i < retorno.length; i++) {
      if (retorno[i].Imagem === undefined) {
        retorno[i].Imagem = "/Images/error404.svg";
      } else {
        retorno[i].Imagem = retorno[i].Imagem?.replace(root, "");
      }
    }

    console.log(retorno);

    res.render("index.ejs", { retorno });
  });
}
