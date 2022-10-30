/** @format */

import type { Express, Request, Response, text } from "express";

export default function (app: Express) {
  app.get("/site-map", async function (req: Request, res: Response) {
    res.render("map.ejs");
  });
}
