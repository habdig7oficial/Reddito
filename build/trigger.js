"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./.config/server");
server_1.app.listen(server_1.port, function () {
    console.log(`✔ - Funcionando em http://0.0.0.0:${server_1.port}`);
});