import { Link } from "react-router-dom";
import "../styles/forumPost.css";
import { MdMoreHoriz, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import SavedData from "../Components/SavedData";
import { saveDB } from "../utils/firebase"
import { useState } from "react";

const Save = () => {
  const [bottombarPost, setbottombarPost] = useState(false);
  const showbottombarPost = () => setbottombarPost(!bottombarPost);

  const funcPost = (evt) => {
    let id = evt.target.id
    console.log(id)
    showbottombarPost()
  }
  return (
    <div onLoad={saveDB()}>
      <section className="saveHead">
        <Link to="/ecoforum" className="iconDivForumProfile">
          <MdOutlineKeyboardArrowLeft className="mdForumProfile arrowLeft" size={50}/>
        </Link>
        <h1>Salvado</h1>
      </section>
      {SavedData().map((item) => {
                return (
                  <div className="maxdiv">
                    <div className="underline"></div>
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
    </div>
  );
};

export default Save;
