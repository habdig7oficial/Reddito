<template>
        <!-- Menu -->
        <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a
          class="navbar-brand"
          href="index.html">
          <img
            src="~/static/img/logohomepage.png"
            alt="Logo"
            class="lwi" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 collap-ajuste">
            <li class="nav-item m-1">
              <a
                class="btn link1"
                href="./login.html"
                role="button">
                Entrar
              </a>
            </li>
            <li class="nav-item m-1">
              <a
                class="btn link2"
                href="./cadastro.html"
                role="button">
                Cadastre-se
              </a>
            </li>
          </ul>
          <div class="opcoesmenu">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a
                  class="nav-link active items"
                  id="item1"
                  aria-current="page"
                  href="#recpopulares">
                  Receitas Populares
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link items"
                  href="#recdia">
                  Receita do Dia
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link items"
                  href="./errorpage.html">
                  Página de erro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>