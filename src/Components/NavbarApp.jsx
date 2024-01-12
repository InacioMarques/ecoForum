import { Link, NavLink } from "react-router-dom";
import { MdDehaze, MdClose } from "react-icons/md";
import "../styles/navbar.css";
import "../styles/navbarApp.css";
import SideBarDataApp from "./SideBarDataApp";
import { useState } from "react";
import { IconContext } from "react-icons/lib/esm";
import { signOutForum } from "../utils/firebase";
/*
TODO: This is what i need to do in CSS to change styling on when an Link is Active from the NavLinks

#navbar a.active {
  color: red;


  * * flex-shrink-0  Prevent shrinking an element, so if the screen is too small, the element will stay the same size.
}
*/

const NavbarApp = () => {
  let user = JSON.parse(localStorage.getItem("currentuser"))
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const handleSingout = () => {
    signOutForum();
  };

  const img = document.querySelector(".imgAppProfile")
  const linkImg = localStorage.getItem("imgPf")

  return (
    <>
      <header onLoad={setTimeout(()=>{img.src = linkImg},100)}>
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
                  <h1>{}</h1>
                  <h4>xxx coins</h4>
                </div>
              </div>
              {SideBarDataApp().map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link className={item.func} to={item.path} onClick={(e)=>{
                      switch(e.target.innerText){
                        case "Profile":
                          let user = JSON.parse(localStorage.getItem("currentUser"))
                          localStorage.setItem("profile", true)
                          localStorage.setItem("lastUser", user.uid)
                        break;
                      }
                    }}>
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecoproject-65d4a.appspot.com/o/devImages%2Ftexto.png?alt=media&token=f287e094-823b-4652-a076-224a06c64915"
                className="navLink itemHome imgHome"
              />
            </ul>
          </nav>
        </IconContext.Provider>
      </header>
    </>
  );
};

export default NavbarApp;
