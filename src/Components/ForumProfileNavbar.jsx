import { Form, Link } from "react-router-dom";
import "../styles/forumProfileNavbar.css"
import {
    MdOutlineKeyboardArrowLeft,
    MdStar,
    MdAdd,
    MdClose
  } from "react-icons/md";
import { useState } from "react";
import { newMensage } from "../utils/firebase";
import { ForumDb } from "../utils/firebase";

const ForumProfileNavbar = () => {
    const [topbarPost, settopbarPost] = useState(false);
    const showtopbarPost = () => settopbarPost(!topbarPost);

    return (
      <div onLoad={() => {
        let title = document.querySelector(".tittleForumH1")
        let desc = document.querySelector(".tittleForumDescrição")
        let backgroundImg = document.querySelector(".backgroundImg")
        let innerImg = document.querySelector(".innerImg")

        ForumDb()
        let profile = JSON.parse(localStorage.getItem("lastForumObj"))

        setTimeout(() => {
            title.innerHTML = `${profile.forumName}`
            desc.innerHTML = `${profile.forumDesc}`
            backgroundImg.src = profile.forumBackImg
            innerImg.src = profile.forumImg
        }, 50);
      }}>
        <nav
        className={topbarPost ? "topSectionPost active" : "topSectionPost"}
        >
            <div className="closePost">
                <div onClick={showtopbarPost}>
                <MdClose size={24}/>
                </div>
            </div>
            <div className="bookPost">
            <div>
                <form className="mensageNew" onSubmit={(e)=>{
                        e.preventDefault()
                        const from = document.querySelector(".mensageNew")
                        const text = document.querySelector(".textMensage")
                        newMensage(from, text.value)

                    }
                    }>
                    <div className="input-dataAdd textareaAdd">
                        <textarea rows="3" cols="80" className="textMensage" required></textarea>
                        <br />
                        <br />
                        <label className="labelMensage" htmlFor="">New mensage</label>
                    </div>
                    <div className="form-rowAdd submit-btnAdd justifyContent">
                    <div className="input-dataAdd">
                        <div className="innerAdd"></div>
                        <input type="submit" value="submit" />
                    </div>
                    </div>
                </form>
            </div>
            </div>
        </nav>
        <section className="sectionForumProfile">
            <div>
                <Link to="/ecoforum" className="iconDivForumProfile">
                    <MdOutlineKeyboardArrowLeft className="mdForumProfile arrowLeft" size={50}/>
                </Link>
                <Link to="/ecoforum" className="iconDivForumProfile">
                    <MdStar className="mdForumProfile star" size={50}/>
                </Link>
                <img
                    className="backgroundImg"
                    src="https://firebasestorage.googleapis.com/v0/b/ecoproject-65d4a.appspot.com/o/devImages%2FJTGW%3DOPSIGOPIGJOI.png?alt=media&token=724cf00a-ed19-4d2b-8608-8f27204f6c3a" 
                />
                <img
                className="innerImg"
                src="https://firebasestorage.googleapis.com/v0/b/ecoproject-65d4a.appspot.com/o/devImages%2F09%C2%ABu%20j0%2Biop9huihibuno.png?alt=media&token=e447c349-462b-4d80-b99a-900fa4e304ad" 
                />
            </div>
            <div className="textForumNavbar">
            <h1 className="tittleForumH1">Name</h1>
            <div>
                <p className="tittleForumDescrição">
                    Descrição
                </p>
            </div>
            <div className="divicon" onClick={showtopbarPost}>
            <MdAdd size={50}
                className=" innerAdd"
            />
        </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default ForumProfileNavbar;