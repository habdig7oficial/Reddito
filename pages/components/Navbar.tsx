import type { NextPage } from "next";

const Navbar: NextPage = function () {
  /* Navbar */
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/img/logohomepage.png" alt="Logo" className="lwi" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 collap-ajuste">
            <li className="nav-item m-1">
              <a className="btn link1" href="./login.html" role="button">
                Entrar
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="btn link2" href="./cadastro.html" role="button">
                Cadastre-se
              </a>
            </li>
          </ul>
          <div className="opcoesmenu">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active items"
                  id="item1"
                  aria-current="page"
                  href="#recpopulares"
                >
                  Receitas Populares
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link items" href="#recdia">
                  Receita do Dia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link items" href="./errorpage.html">
                  Página de erro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
