"use strict";
/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../.config/database");
const recipes_1 = require("../.models/recipes");
const multer_1 = require("../.config/multer");
function default_1(app) {
    (0, database_1.conexao)();
    app.get("/receita", function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.query;
            let retorno;
            try {
                retorno = yield recipes_1.recipes.findOne({
                    _id: id,
                });
            }
            catch (err) {
                console.log(err);
            }
            console.log(id);
            console.log(retorno);
            if (retorno != null && retorno != undefined) {
                if (retorno.Imagem === undefined || retorno.Imagem === undefined) {
                    retorno.Imagem = "";
                }
                else {
                    retorno.Imagem = (_a = retorno.Imagem) === null || _a === void 0 ? void 0 : _a.replace(multer_1.root, "");
                }
            }
            else {
                return res.redirect(`/err?${id}`);
            }
            res.render("receita.ejs", { retorno });
        });
    });
}
exports.default = default_1;
