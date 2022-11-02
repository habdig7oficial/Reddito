/** @format */

import argon2 from "argon2";
import { conexao } from "../.config/database.mjs";
import { users } from "../.models/users.mjs";
import { createToken } from "./middleware/Tokens.mjs";
import makeSecret from "./middleware/makeSecrete.mjs";


export default function (app) {
  conexao();

  app.get("/login", async function (req, res) {
    res.render("login.ejs");
  });

  app.post("/login", async function (req, res) {
    let { email, password }= req.body;

    let reqIp = req.ip;

    email = email.trim();
    password = password.trim();

    let exists = await users.findOne({
      Email: email,
    });

    if (exists === null) {
      return res.send(`O email ${email} não está cadastrado`);
    } else if (exists.Password == null) {
      return res.send(`Um erro inesperado aconteceu`);
    }

    let trys = 0;

    for (let i = 0; i < exists.Trys.length; i++) {
      // let dbd : number = Date.parse(exists.Trys[i].Date)

      // let diff = dbd - default_time

      if (exists.Trys[i].Ip == reqIp) {
        trys++;
      }
    }
    console.log(trys);

    if (trys > 10) {
      await deferr(exists);
      return res.send(`Muitos erros`);
    }

    let result;

    try {
      result = await argon2.verify(exists.Password, password);
    } catch (err) {
      console.error(err);
      return res.send(`Um erro inesperado aconeceu`);
    }

    let secret = await makeSecret(50);

    if (result == true && exists.Email != undefined) {
      let token = createToken({
        msg: exists.Email,
        secret: secret,
        time: "1h",
      });

      await users.findOneAndUpdate({ Email: exists.Email }, { JWT: secret });

      console.log(secret);
      console.log(token);

      secret = undefined;

      let secure;

      if (process.env.Node_env != "dev") {
        secure = true;
      } else {
        secure = false;
      }

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: secure,
        sameSite: "strict",
      });

      res.cookie("email", exists.Email, {
        httpOnly: true,
        secure: secure,
        sameSite: "strict",
      });

      res.redirect("/minhas-receitas");
    } else {
      await deferr(exists);

      return res.send(`Email e/ou senha inválidos`);
    }

    async function deferr(exists) {
      let logg = await users.findOneAndUpdate(
        {
          Email: exists.Email,
        },
        {
          $addToSet: {
            Trys: {
              Ip: reqIp,
              $set: { Date: Date.now() },
            },
          },
        },
      );

      console.log(logg);
    }
  });
}
