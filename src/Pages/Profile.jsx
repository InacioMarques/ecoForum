import ProfileNavbar from "../Components/ProfileNavbar";
import "../styles/forumPost.css";
import { MdMoreHoriz, MdClose, MdBookmark} from "react-icons/md";
import { useState } from "react";
import ProfileData from "../Components/ProfileData";
import { postManagerPf } from "../utils/firebase";
import { saved } from "../utils/firebase";

const Profile = () => {
  const [bottombarPost, setbottombarPost] = useState(false);
  const showbottombarPost = () => setbottombarPost(!bottombarPost);

  const funcPost = (event) => {
    localStorage.setItem("id", event.target.id)
    showbottombarPost()
  }

  return (
    <div onLoad={postManagerPf()}>
      <ProfileNavbar />
      {ProfileData().map((item) => {
                return (
                  <div className="maxdiv">
                    <section className="post">
                      <div className="sectionPost">
                        <div className="headPost">
                          <div className="userPost">
                            <img
                              className="imgPost"
                              src={item.img}
                            />
                            <h1 className="titlePost">{item.author}</h1>
                          </div>
                          <div id={item.postID} onClick={(e) => funcPost(e)} className="iconPost">
                            <MdMoreHoriz id={item.postID} size={40} />
                          </div>
                        </div>
                        <div className="textPost">
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </section>
                    <div className="underline"></div>
                  </div>
                );
        })}
      <nav className={bottombarPost ? "bottomSectionPost active" : "bottomSectionPost"}>
        <div className="closePost">
            <div onClick={showbottombarPost}>
              <MdClose size={24}/>
            </div>
        </div>
        <div className="bookPost">
          <div onClick={saved()} >
            <MdBookmark size={80} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Profile;
