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
exports.M_conf = exports.where = exports.storage = exports.root = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
let max = Math.ceil(999999);
let min = Math.floor(0);
exports.root = "./src/assets"; /* Proibida barra no final */
exports.storage = `/Public/Images`; /* barra no começo é obrigatória para evitar bugs */
exports.where = multer_1.default.diskStorage({
    destination: function (req, file, next) {
        next(null, exports.root + exports.storage);
    },
    filename: function (req, file, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = `__id-${Date.now()}_${Math.floor(Math.random() * (max - min) + min)}`;
            let sanitaize = path_1.default.parse(file.originalname).name.replace(/[^a-zA-Z1-9]/g, "") +
                id +
                path_1.default.extname(file.originalname).replace(/[^.a-zA-Z1-9]/g, "");
            next(null, sanitaize);
        });
    },
});
exports.M_conf = (0, multer_1.default)({ storage: exports.where });
