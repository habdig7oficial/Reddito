import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Error404Page: NextPage = function () {
  const route = useRouter();

  const [Gpath, path] = useState("/");

  useEffect(function () {
    path(route.asPath), [];
  });

  return (
    <>
      <Navbar></Navbar>

      <section className="m-4 p-1">
        <div className="escrita">
          <h1 className="titulo fw-bold">ERRO</h1>
          <h2 className="subtitulo">Page not found :(</h2>
          <p className="d-flex justify-content-center">
            Dentre nossas várias receitas não conseguimos uma para achar a
            página "<span className="fw-bold variant-color">{Gpath}</span>"
          </p>
          <div className="d-flex justify-content-center">
            <a className="btn link1" href="/" role="button">
              Voltar para a Página Inicial
            </a>
          </div>
        </div>
        <div className="imagemm d-flex justify-content-center m-5">
          <img src="./img/error404.svg" alt="Imagem vetoriazada de erro" />
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Error404Page;
