"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    app.get("/*", function (req, res) {
        res.render("error.ejs");
    });
}
exports.default = default_1;