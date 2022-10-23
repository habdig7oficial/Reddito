import type { NextPage } from "next";
import Image from "next/image";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const HomePage: NextPage = function () {
  return (
    <>
      <Navbar></Navbar>
      {/* Banner */}
      <main className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
        <div className="descricaoreddito">
          {/*style="margin-top: 100px"*/}
          <h1 className="titulo">REDDITO</h1>
          <h2 className="subtitulo">O tempero mais familiar na sua mesa</h2>
          <p className="explicacao">
            Um site especial para pessoas amantes da gastronomia, que se
            divertem ao entrar na cozinha e buscam uma maneira mais fácil de
            consultar receitas. O Reddito facilitará a sua vida e fazendo com
            que você nunca mais se estresse ou se preocupe com onde procurar e
            anotar suas receitas favoritas!
          </p>
        </div>
        {/* Cadastre suas receitas, após o cadastro ou login, deve ir direto para a página de novas receitas */}
        <a href="./cadastro.html" className="link2 btn btn-lg" role="button">
          {/*style="margin-bottom: 100px"*/}
          Cadastre suas receitas
        </a>
      </main>

      {/*Cards */}
      {/*Entrada para o Backend, receitas mais populares*/}
      <section className="container" id="recpopulares">
        <h3 id="populares">Mais Populares</h3>
        <div className="card-group d-flex flex-wrap m-5 px-2">
          <div className="card mx-3">
            <img
              src="/img/strogonoffdefrango.png"
              className="card-img-top"
              alt="Strogonoff"
            />
            <div className="card-body d-flex justify-content-center flex-column m-3">
              <h5 className="card-title">Strogonoff</h5>
              <p className="card-text">
                O strogonoff de frango simples é um prato delicioso e
                superprático de se fazer.
              </p>
              {/*Entrada para o Backend, alerta de produtos*/}
              <div className="listinha">
                <div className="configlista">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-warning">
                      ⚠️ Contém Soja
                    </li>
                    <li className="list-group-item list-group-item-warning">
                      ⚠️ Contém Lactose
                    </li>
                  </ul>
                </div>
              </div>
              <a href="./receita1.html" className="link2 btn" role="button">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/lasanha.png"
              className="card-img-top"
              alt="lasanha"
            />
            <div className="card-body">
              <h5 className="card-title">Lasanha</h5>
              <p className="card-text">
                A lasanha à bolonhesa é um prato muito amado e bem fácil de ser
                feito.
              </p>
              {/*Entrada para o Backend, alerta de produtos que as pessoas podem  restrições*/}
              <div className="listinha">
                <div className="configlista">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-warning">
                      ⚠️ Contém Lactose
                    </li>
                    <li className="list-group-item list-group-item-warning">
                      ⚠️ Contém Glúten
                    </li>
                  </ul>
                </div>
              </div>
              <div className="botao"></div>
              <a href="./receita2.html" className="link2 btn" role="button">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/escondidinho.png"
              className="card-img-top"
              alt="escondidinho"
            />
            <div className="card-body">
              <h5 className="card-title">Escondidinho</h5>
              <p className="card-text">
                Simples e fácil de fazer, o escondidinho de frango combina purê
                de batata e recheio de frango.
              </p>
              {/*Entrada para o Backend, alerta de produtos*/}
              <div className="listinha">
                <div className="configlista">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-warning">
                      ⚠️ Contém Lactose
                    </li>
                    <li className="list-group-item list-group-item-warning">
                      ⚠️ Contém Cheiro Verde
                    </li>
                  </ul>
                </div>
              </div>
              <a href="./receita3.html" className="link2 btn" role="button">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*Receita do dia*/}
      <section id="recdia">
        <div>
          <h3 id="dia">Receita do dia</h3>
          <div className="d-flex justify-content-center mb-5">
            <div className="fixedcard">
              <div className="card mb-1 mrc">
                <div className="row">
                  <div className="col-md-0">
                    <img
                      src="/img/receita-do-dia.png"
                      className="img-fluid rounded-start"
                      alt="Receita do Dia | Nome da receita"
                    />
                  </div>
                  <div className="mx-1">
                    <div className="card-body d-flex justify-content-center flex-column ">
                      <h5 className="card-title">Tacos</h5>

                      <p className="card-text">
                        Receita de taco mexicano com recheio de carne moída
                        fácil para você servir no lanche ou substituir uma
                        refeição.
                      </p>
                      <div className="listinha">
                        <div className="configlista">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item list-group-item-warning">
                              ⚠️ Contém Trigo
                            </li>
                            <li className="list-group-item list-group-item-warning">
                              ⚠️ Contém Pimenta
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*Aqui temos uma entrada para o Backend, com atualização da receita/opcional*/}
                      <p className="card-text">
                        <small className="text-muted">
                          Publicada a 30 minutos
                        </small>
                      </p>
                      <a
                        href="./ver"
                        className="link2 btn"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Ver Receita
                      </a>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                              >
                                Faça seu cadastro ou Login
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p>
                                Para ter acesso a esse conteúdo, faça o seu
                                cadastro, ou se já tem uma conta, faça seu
                                login!
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Fechar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
