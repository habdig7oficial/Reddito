/** @format */

import jwt from "jsonwebtoken"; /* Biblioteca de Json Web Token utilizada para autenticação, documentação: https://www.npmjs.com/package/jsonwebtoken */


function createToken(tkparam) {
  /* Exportando a função como padrão */

  /* Tenta criar um token válido */
  try {
    let token = jwt.sign(
      {
        id: tkparam.msg,
      },
      tkparam.secret,
      { expiresIn: tkparam.time },
    );

    return token;
  } catch (err) {
    /* Se não conseguir da um erro e volta por onde foi chamado */
    console.error(`❌ - Não foi possivel criar um token válido: ${err}`);
    return;
  }
}

function verifyToken(tkparam) {
  /* Tenta verificar a autenticidade do token */
  try {
    let token = jwt.verify(tkparam.analise_token, tkparam.secret);

    console.log(token);

    return {
      jwtoken: tkparam.analise_token,
      verified: true,
      return_verify: token,
    };
  } catch (err) {
    /* Se não conseguir dá um erro e retorna para onde foi chamado */

    console.error(`❌ - Não foi possivel criar um token válido: ${err}`);
    return {
      jwtoken: tkparam.analise_token,
      verified: false,
      return_verify: undefined,
      err: err,
    };
  }
}

export { createToken, verifyToken }; /* Exportando Funções */
