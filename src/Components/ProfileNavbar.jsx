import { Form, Link } from "react-router-dom";
import "../styles/forumProfileNavbar.css"
import {
    MdOutlineKeyboardArrowLeft,
    MdEdit,
    MdClose
  } from "react-icons/md";
import { useState } from "react";
import { newMensage } from "../utils/firebase";
import { profileDb } from "../utils/firebase";

const ProfileNavbar = () => {
    let user
    
    const [topbarPost, settopbarPost] = useState(false);

    const showtopbarPost = () => {
        if(localStorage.getItem("profile") == "true"){
            settopbarPost(!topbarPost);
        }
    }

    return (
      <div onLoad={() => {
        let title = document.querySelector(".username")
        let backgroundImg = document.querySelector(".backgroundImg")
        let innerImg = document.querySelector(".innerImg")

        profileDb()
        let profile = JSON.parse(localStorage.getItem("lastProfile"))

        setTimeout(() => {
            profile = profile[0]
            title.innerHTML = `${profile.name}`
            backgroundImg.src = profile.BackImg
            innerImg.src = profile.img
        }, 50);
      }}>
        <nav className={topbarPost ? "topSectionPost active" : "topSectionPost"}>
            <div className="closePost">
                <div onClick={showtopbarPost}>
                <MdClose size={24}/>
                </div>
            </div>
            <div className="bookPost">
            <div>
                <form className="photoNew" onSubmit={(e)=>{
                        e.preventDefault()
                        const from = document.querySelector(".photoNew")
                        const file = document.querySelector(".photopfc").files;
                        newMensage(from, file)

                    }
                    }>
                    <div className="divInputFile">
                        <input name="files" className="inputFile photopfc" type="file" multiple />
                        <p className="inputFileP">
                            Coloque background.png/jpg e main.png/jpg
                        </p>
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
                <div onClick={showtopbarPost} className="iconDivForumProfile">
                    <MdEdit className="mdForumProfile star" size={50}/>
                </div>
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
            <h1 className="username"></h1>
            </div>
            <div></div>
        </section>
      </div>
    );
  };
  
  export default ProfileNavbar;