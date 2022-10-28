/** @format */

import type { Express, Request, Response } from "express";

export default function (app: Express) {
  app.get("/*", function (req: Request, res: Response) {
    let url = req.url;

    res.render("error.ejs", { url });
  });
}
