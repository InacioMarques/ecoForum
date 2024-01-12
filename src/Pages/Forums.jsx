import ForumProfileNavbar from "../Components/ForumProfileNavbar";
import "../styles/forumPost.css";
import { MdMoreHoriz, MdClose, MdBookmark} from "react-icons/md";
import { useState } from "react";
import { postManager } from "../utils/firebase"
import ForumData from "../Components/ForumData"
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  const [bottombarPost, setbottombarPost] = useState(false);
  const showbottombarPost = () => setbottombarPost(!bottombarPost);

  const funcPost = (evt) => {
    let id = evt.target.id
    console.log(id)
    showbottombarPost()
  }

  return (
    <div onLoad={postManager()}>
      <ForumProfileNavbar />
      {ForumData().map((item) => {
                return (
                  <div className="maxdiv">
                    <section className="post">
                      <div className="sectionPost">
                        <div className="headPost">
                          <div onClick={() => {localStorage.setItem("lastUser", item.authorID); navigate("/ecoforum/profile")}} className="userPost">
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
          <div>
            <MdBookmark size={80} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Forum;
