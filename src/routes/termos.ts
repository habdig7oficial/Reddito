/** @format */

import type { Express, Request, Response } from "express";

export default function (app: Express) {
  app.get("/termos-de-uso", async function (req: Request, res: Response) {
    res.render("termos-de-uso.ejs");
  });
}
