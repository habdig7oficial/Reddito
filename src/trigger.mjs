/** @format */

import { app, port } from "./.config/server.mjs"; /* Importa configurações */

app.listen(port, function () {
  console.log(`✔ - Funcionando em http://0.0.0.0:${port}`);
  /* Garante que o server está funcionando */
});
