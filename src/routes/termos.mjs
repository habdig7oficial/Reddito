/** @format */



export default function (app) {
  app.get("/termos-de-uso", async function (req, res) {
    res.render("termos-de-uso.ejs");
  });
}
