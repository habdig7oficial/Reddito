import type { NextPage } from "next";

const Footer: NextPage = function () {
  /* Rodapé */
  return (
    <footer className="container-fluid">
      <div className="container flexFooter">
        <div className="img">
          <img
            className="rounded border border-white"
            src="/img/RedditoLogo.png"
            width="100"
            alt="Reddito Logo"
          />
        </div>
        <div className="textofooter">
          <p className="pmaiordofooter">
            Copyright &#169; 2022 Anne Ribeiro, Carolina Almeida, Heloísa Real,
            Julie Sanday, Maria Gonçalves, Mateus Vieira
          </p>
          <p className="pmenordofooter">
            Reddito, distribuido de forma Open Source e gratuita pela licença
            MIT,
            <span className="fw-bold">
              Site ficticio com finalidade acadêmica.
            </span>
          </p>
        </div>
        <div id="social">
          <a href="./pag-continuidade.html" target="_blank">
            <img
              src="img/instagram.png"
              alt="Instagram"
              className="instagram"
            />
          </a>
          <a href="./pag-continuidade.html">
            <img src="/img/facebook.png" alt="Facebook" className="facebook" />
          </a>
          <a href="./pag-continuidade.html">
            <img src="/img/youtube.png" alt="YouTube" className="youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
