/** @format */

import { conexao } from "../.config/database.mjs";
import { recipes } from "../.models/recipes.mjs";

import { root } from "../.config/multer.mjs";

export default function (app) {
  conexao();
  app.get("/receita", async function (req, res) {
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
