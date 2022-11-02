/** @format */

import { conexao } from "../.config/database.mjs";
import { recipes } from "../.models/recipes.mjs";

import { root } from "../.config/multer.mjs";

export default function (app) {
  conexao();
  app.get("/galeria", async function (req, res) {
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
