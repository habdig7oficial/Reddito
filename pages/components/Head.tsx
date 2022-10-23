import type { NextPage } from "next";
import Nexthead from "next/head";

const Head: NextPage = function () {
  return (
    <Nexthead>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Reddito homepage</title>
      <meta
        name="description"
        content="Reddito um site para possibilitar a acessibilidade de receitas culinárias de forma simples e intuitiva. E promover o compartilhamento de receitas."
      />
      /* Favcon Icon */
      <link rel="icon" href="/img/logo-da-pag.png" />
    </Nexthead>
  );
};

export default Head;
