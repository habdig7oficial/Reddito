/** @format */

import multer from "multer";
import { Express, Request, Response } from "express";

/*
const armazenamento = multer.diskStorage({
    
})
*/

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
