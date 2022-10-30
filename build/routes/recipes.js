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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../.config/database");
const multer_1 = require("../.config/multer");
const users_1 = require("../.models/users");
const recipes_1 = require("../.models/recipes");
const Tokens_1 = require("./middleware/Tokens");
const DeleteSecret_1 = __importDefault(require("./middleware/DeleteSecret"));
const GabargeCollector_1 = __importDefault(require("./middleware/GabargeCollector"));
function default_1(app) {
    (0, database_1.conexao)();
    app.get("/create", function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let { jwt, email } = req.cookies;
            let consulta = yield users_1.users.findOne({
                Email: email,
            });
            if (consulta === null) {
                (0, DeleteSecret_1.default)(res);
                return res.send(`Não foi possivel encontrar o email ${email}`);
            }
            let result;
            try {
                result = (0, Tokens_1.verifyToken)({
                    analise_token: jwt,
                    secret: consulta.JWT,
                });
            }
            catch (err) {
                console.error(err);
                return res.send(`Erro genérico`);
            }
            if (result.verified == false) {
                (0, DeleteSecret_1.default)(res);
                return res.redirect("/login");
            }
            let retorno = yield recipes_1.recipes.find({ Email: email });
            /* console.log(retorno); */
            for (let i = 0; i < retorno.length; i++) {
                if (retorno[i].Imagem === undefined) {
                    retorno[i].Imagem = "";
                }
                else {
                    retorno[i].Imagem = (_a = retorno[i].Imagem) === null || _a === void 0 ? void 0 : _a.replace(multer_1.root, "");
                }
            }
            res.render("create.ejs", { retorno });
        });
    });
    app.post("/create", multer_1.M_conf.single("imagem"), function (req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let { titulo, descricao, porcoes, ingredientes, preparo } = req.body;
            let { jwt, email } = req.cookies;
            let path;
            if (((_a = req.file) === null || _a === void 0 ? void 0 : _a.destination) == undefined ||
                ((_b = req.file) === null || _b === void 0 ? void 0 : _b.filename) == undefined) {
                path = "";
            }
            else {
                path = `${req.file.destination}/${req.file.filename}`;
            }
            console.log(path);
            titulo.trim();
            descricao.trim();
            porcoes.trim();
            ingredientes.trim();
            preparo.trim();
            let consulta = yield users_1.users.findOne({
                Email: email,
            });
            if (consulta === null) {
                (0, DeleteSecret_1.default)(res);
                yield (0, GabargeCollector_1.default)(path);
                return res.send(`Não foi possivel encontrar o email ${email}`);
            }
            try {
                let result = (0, Tokens_1.verifyToken)({
                    analise_token: jwt,
                    secret: consulta.JWT,
                });
            }
            catch (err) {
                console.error(err);
                (0, DeleteSecret_1.default)(res);
                console.log(path);
                yield (0, GabargeCollector_1.default)(path);
                return res.send(`Não foi possível assinar o jwt`);
            }
            let lenthP = 200;
            if (descricao.length > lenthP) {
                yield (0, GabargeCollector_1.default)(path);
                //lembrar de adicionar data
                return res.send(`O comprimento da descrição é maior que o permitido. ${descricao.length} > ${lenthP}`);
            }
            /*console.log(ingredientes);*/
            ingredientes = ingredientes.split(",");
            /*console.log(ingredientes);*/
            try {
                let gravar = yield new recipes_1.recipes({
                    Titulo: titulo,
                    Email: email,
                    Descricao: descricao,
                    Porcoes: porcoes,
                    Imagem: path,
                    Ingredientes: ingredientes,
                    Preparo: preparo,
                }).save();
            }
            catch (err) {
                console.log(err);
                yield (0, GabargeCollector_1.default)(path);
                return res.send("nem todos os campos foram preenchidos");
            }
            console.log(req.file);
            res.redirect("/create");
        });
    });
    app.post("/update", function (req, res) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let { _id, titulo, descricao, porcoes, ingredientes, preparo } = req.body;
            let { jwt, email } = req.cookies;
            let consulta = yield users_1.users.findOne({
                Email: email,
            });
            let path = "";
            if (((_a = req.file) === null || _a === void 0 ? void 0 : _a.path) != undefined || ((_b = req.file) === null || _b === void 0 ? void 0 : _b.path) != null) {
                path = (_c = req.file) === null || _c === void 0 ? void 0 : _c.path;
            }
            if (consulta === null) {
                (0, DeleteSecret_1.default)(res);
                yield (0, GabargeCollector_1.default)(path);
                return res.send(`Não foi possivel encontrar o email ${email}`);
            }
            try {
                let result = (0, Tokens_1.verifyToken)({
                    analise_token: jwt,
                    secret: consulta.JWT,
                });
            }
            catch (err) {
                console.error(err);
                (0, DeleteSecret_1.default)(res);
                yield (0, GabargeCollector_1.default)(path);
                return res.send(`Não foi possível assinar o jwt`);
            }
            /*console.log(dados.ingredientes);*/
            ingredientes = ingredientes.split(",");
            /*console.log(dados.ingredientes);*/
            try {
                let update = yield recipes_1.recipes.findOneAndUpdate({
                    _id: _id,
                    Email: email,
                }, {
                    Titulo: titulo,
                    Email: email,
                    Descricao: descricao,
                    Porcoes: porcoes,
                    Imagem: path,
                    Ingredientes: ingredientes,
                    Preparo: preparo,
                    Alterado: true,
                });
            }
            catch (err) {
                console.log(err);
                return res.send("campos essenciais não foram preenchidos");
            }
            //await GabargeCollector(await recipes.findOne());
            res.redirect("/create");
        });
    });
    app.post("/delete", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { _id } = req.body;
            let { jwt, email } = req.cookies;
            let consulta = yield users_1.users.findOne({
                Email: email,
            });
            if (consulta === null) {
                (0, DeleteSecret_1.default)(res);
                return res.send(`Não foi possivel encontrar o email ${email}`);
            }
            try {
                let result = (0, Tokens_1.verifyToken)({
                    analise_token: jwt,
                    secret: consulta.JWT,
                });
            }
            catch (err) {
                console.error(err);
                (0, DeleteSecret_1.default)(res);
                return res.send(`Não foi possível assinar o jwt`);
            }
            let del = yield recipes_1.recipes.findOneAndDelete({
                _id: _id,
                Email: email,
            });
            let Imagem = yield recipes_1.recipes.findOne({
                _id: _id,
                Email: email,
            });
            //await GabargeCollector()
            res.redirect("/create");
        });
    });
}
exports.default = default_1;
