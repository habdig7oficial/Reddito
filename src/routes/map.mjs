/** @format */


export default function (app) {
  app.get("/site-map", async function (req, res) {
    res.render("map.ejs");
  });
}
