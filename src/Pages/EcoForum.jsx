import NavbarApp from "../Components/NavbarApp";
import FooterApp from "../Components/FooterApp";
import ecoforumData from "../Components/ecoforumData";
import { MdMoreHoriz } from "react-icons/md";
import { forums } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const EcoForum = () => {
  const navigate = useNavigate();

  return (
    <div onLoad={forums()}>
      <NavbarApp />
      <div className="SelectApp"></div>
      <section>
      {ecoforumData().map((item) => {
                return (
                  <div onClick={() => { localStorage.setItem("lastForum", item.forumId);  navigate("/ecoforum/forum")}} className="maxdiv">
                    <section className="post">
                      <div className="sectionPost">
                        <div className="headPost">
                          <div className="userPost">
                            <img
                              className="imgPost"
                              src={item.forumImg}                        
                            />
                            <h1 className="titlePost">{item.forumName}</h1>
                          </div>
                          <div id={item.postID} onClick={(e) => funcPost(e)} className="iconPost">
                            <MdMoreHoriz id={item.postID} size={40} />
                          </div>
                        </div>
                        <div className="textPost">
                          <p>{item.forumDesc}</p>
                        </div>

                      </div>
                    </section>
                    <div className="underline"></div>
                  </div>
                );
        })}
      </section>
      <FooterApp />
    </div>
  );
};

export default EcoForum;
