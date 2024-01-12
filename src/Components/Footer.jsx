import "../styles/footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="footer">
          <div className="information">
            <div className="informationDiv">
              <h1>Sobre nós</h1>
              <p>
              O Ecoforum tem como objetivo a necessidade de agir no meio ambiente, promovendo
              a sustentabilidade atravez da incentivação do diálogo e a troca de ideias sustentaveis.
              </p>
            </div>
            <div className="informationDiv">
              <h1 className="itens">Nosso site</h1>
              <Link className="itens" to="/">Home</Link>
              <Link className="itens" to="/contactus">Contact Us</Link>
              <Link className="itens" to="/login">Login</Link>
              <Link className="itens" to="/register">Register</Link>
            </div>
          </div>
          <div className="companylogoDiv">
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/ecoproject-65d4a.appspot.com/o/devImages%2Flogo%20empresa.png?alt=media&token=c8669f33-fb52-4ce8-91a5-9bb886a4137f"/>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
