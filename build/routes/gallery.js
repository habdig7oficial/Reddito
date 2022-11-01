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
    app.get("/galeria", function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let retorno = yield recipes_1.recipes.find();
            /* console.log(retorno); */
            for (let i = 0; i < retorno.length; i++) {
                if (retorno[i].Imagem === undefined) {
                    retorno[i].Imagem = "";
                }
                else {
                    retorno[i].Imagem = (_a = retorno[i].Imagem) === null || _a === void 0 ? void 0 : _a.replace(multer_1.root, "");
                }
            }
            res.render("gallery.ejs", { retorno });
        });
    });
}
exports.default = default_1;
