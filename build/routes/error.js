"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    app.get("/*", function (req, res) {
        let url = req.url;
        res.render("error.ejs", { url });
    });
}
exports.default = default_1;
