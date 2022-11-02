/** @format */

import multer from "multer";

/*
import { Express, Request, Response } from "express";

/*


export default function (app: Express) {
  app.post("/stats", function (req: Request, res: Response) {
    const upload = multer({ dest: "" });

    upload.single("uploaded_file");

    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any
    console.log(req.body.image, req.body);

    res.send(req.body);
  });
}
*/

import makeSecrete from "../routes/middleware/makeSecrete.mjs";
import path from "path";

let max = Math.ceil(999999);
let min = Math.floor(0);

export const root = "./src/assets"; /* Proibida barra no final */
export const storage = `/Public/Images`; /* barra no começo é obrigatória para evitar bugs */

export const where = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, root + storage);
  },
  filename: async function (req, file, next) {
    let id = `__id-${Date.now()}_${Math.floor(
      Math.random() * (max - min) + min,
    )}`;

    let sanitaize =
      path.parse(file.originalname).name.replace(/[^a-zA-Z0-9]/g, "_") +
      id +
      path.extname(file.originalname).replace(/[^.a-zA-Z0-9]/g, "");

    next(null, sanitaize);
  },
});

export const M_conf = multer({
  storage: where,

  fileFilter: function (req, file, next) {
    let { mimetype } = file;

    let permission = [
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/jpeg",
      "image/jpeg",
    ];

    for (let i = 0; i < permission.length; i++) {
      if (mimetype == permission[i]) {
        next(null, true);
      }
    }

    next(null, false);
  },
});
