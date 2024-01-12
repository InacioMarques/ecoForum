import { Link, NavLink } from "react-router-dom";
import { MdDehaze, MdClose } from "react-icons/md";
import "../styles/navbar.css";
import SideBarData from "./SideBarData";
import { useState } from "react";
import { IconContext } from "react-icons/lib/esm";
/*
TODO: This is what i need to do in CSS to change styling on when an Link is Active from the NavLinks

#navbar a.active {
  color: red;


  * * flex-shrink-0  Prevent shrinking an element, so if the screen is too small, the element will stay the same size.
}
*/

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header>
        <IconContext.Provider value={{ color: "#fff" }}>
          <nav id="navbar" className="navbar">
            <div>
              <Link to="/" className="logoContainer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ecoproject-65d4a.appspot.com/o/devImages%2Ficon.png?alt=media&token=4ee19037-2d77-4fc4-8c6d-5b6ee4be893d"
                  alt="EcoForum"
                  width="48"
                  height="48"
                  className="logoImg"
                />
                <span className="logo">EcoForum</span>
              </Link>
            </div>

            <ul className="navbarItems navbarItems-center">
              <NavLink to="/" className="navLink itemHome">
                Home
              </NavLink>
              <NavLink to="/contactus" className="navLink itemContact">
                Contact Us
              </NavLink>
            </ul>
            <ul className="navbarItems navbarItems-end">
              <NavLink to="/login" className="navLink itemLogin">
                Login
              </NavLink>
              <NavLink to="/register" className="navLink itemRegister">
                Register
              </NavLink>
              <NavLink
                to="#"
                className="navLink itemBars entry"
                onClick={showSidebar}
              >
                <div className="itemBars-icon">
                  <MdDehaze size={24} />
                </div>
              </NavLink>
            </ul>
          </nav>

          <nav className={sidebar ? "side-menu active" : "side-menu"}>
            <ul className="side-menu-items">
              <li className="side-toggle">
                <Link to="#" className="side-menu-bars">
                  <MdClose
                    size={24}
                    className="side-close"
                    onClick={showSidebar}
                  />
                </Link>
              </li>
              {SideBarData().map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </header>
    </>
  );
};

export default Navbar;
