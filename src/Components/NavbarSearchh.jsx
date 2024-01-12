import { Link, NavLink } from "react-router-dom";
import { MdDehaze, MdClose } from "react-icons/md";
import "../styles/navbar.css";
import "../styles/navbarApp.css";
import SideBarDataApp from "./SideBarDataApp";
import { useState } from "react";
import { IconContext } from "react-icons/lib/esm";
import { signOutForum } from "../utils/firebase"
import { searchDB } from "../utils/firebase"; 

const NavbarSearchh = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const handleSingout = () => {
      signOutForum()
    }

  
    return (
      <>
        <header>
          <IconContext.Provider value={{ color: "#fff" }}>
          <nav className={sidebar ? "side-meno active" : "side-meno"}>
              <ul className="side-menu-items">
                  <div className="appProfile">
                      <img
                      src="https://firebasestorage.googleapis.com/v0/b/ecoproject-65d4a.appspot.com/o/devImages%2Ficon.png?alt=media&token=4ee19037-2d77-4fc4-8c6d-5b6ee4be893d"
                      className="imgAppProfile"
                      onClick={showSidebar}
                      />
                      <div>
                          <h1>Profile Name</h1>
                          <h4>xxx coins</h4>
                      </div>
                  </div>
                {SideBarDataApp().map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
                <li className="side-text exit">
                <Link to="/" onClick={handleSingout}>
                  <MdClose size={24} />
                  <span>Terminar sessão</span>
                </Link>
              </li>
              </ul>
            </nav>
            <nav id="navbar" className="navbar navbarApp">
            <NavLink
                  to="#"
                  className="navLink itemBars imgApp"
                  onClick={showSidebar}
                >
                  <div className="itemBars-icon">
                    <MdDehaze size={24} />
                  </div>
                </NavLink>
  
              <ul className="navbarItems navbarItems-center">
                <p>
                  <span class="inputSearch spanSeach">
                    <input onChange={(e)=>{searchDB(e.target.value)}} className="inputSearch_input" type="text" placeholder="Pesquise sobre as tuas ideias"/>
                    <span></span>	
                  </span>
                </p>
              </ul>
            </nav>
          </IconContext.Provider>
        </header>
      </>
    );
  };
  
  export default NavbarSearchh;