"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
/*
const armazenamento = multer.diskStorage({
    
})
*/
function default_1(app) {
    app.post("/stats", function (req, res) {
        const upload = (0, multer_1.default)({ dest: "./public/data/uploads/" });
        upload.single("uploaded_file");
        // req.file is the name of your file in the form above, here 'uploaded_file'
        // req.body will hold the text fields, if there were any
        console.log(req.body.image, req.body);
        res.send(req.body);
    });
}
exports.default = default_1;
