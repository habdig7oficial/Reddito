/** @format */


export default function (app) {
  app.get("/*", function (req, res) {
    let url = req.url;

    res.render("error.ejs", { url });
  });
}
