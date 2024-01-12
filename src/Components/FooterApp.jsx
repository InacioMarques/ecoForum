import "../styles/footerApp.css";
import { Link } from "react-router-dom";
import { MdHome, MdAdd, MdSearch } from "react-icons/md";

const FooterApp = () => {
  return (
    <div>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <footer className="bodyFooterApp">
        <section>
          <Link className="footerApp-itens" to="/ecoforum">
            <MdHome size="48" />
          </Link>
          <Link className="footerApp-itens" to="/ecoforum/add">
            <MdAdd size="48" />
          </Link>
          <Link className="footerApp-itens" to="/ecoforum/search">
            <MdSearch size="48" />
          </Link>
        </section>
      </footer>
      {/* </IconContext.Provider> */}
    </div>
  );
};

export default FooterApp;
