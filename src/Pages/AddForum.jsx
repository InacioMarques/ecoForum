import NavbarApp from "../Components/NavbarApp";
import FooterApp from "../Components/FooterApp";
import "../styles/add.css";
import {addForum} from "../utils/firebase"

const AddForum = () => {
  return (
    <>
      <NavbarApp />
      <section className="sectionAdd">
        <div className="containerAdd">
          <div className="text help">Vamos criar novo forum?</div>
          <form className="addForum" onSubmit={(e) => {
            e.preventDefault()
            const from = document.querySelector(".addForum")
            const file = document.querySelector(".photo").files;
            const titleforum = document.querySelector(".titleForum")
            const tags = document.querySelector(".tags")
            const desc = document.querySelector(".desc")
            addForum(from, titleforum.value, tags.value, desc.value, file)
            }}>
            <div className="form-rowAdd marginRow">
              <div className="input-dataAdd">
                <input className="titleForum" type="textAdd" required />
                <div className="underlineAdd"></div>
                <label htmlFor="">Titulo do Forum</label>
              </div>
            </div>
            <div className="form-rowAdd marginRow">
              <div className="input-dataAdd ">
                <input className="tags" type="textAdd" required />
                <div className="underlineAdd"></div>
                <label htmlFor="">Tags</label>
              </div>
            </div>
            <div className="form-rowAdd marginRow">
              <div className="input-dataAdd textareaAdd">
                <textarea className="desc" rows="8" cols="80" required></textarea>
                <br />
                <div className="underlineAdd"></div>
                <label htmlFor="">Descrição</label>
                <br />
                <div className="divInputFile">
                  <input name="files" className="inputFile photo" type="file" multiple />
                  <p className="inputFileP">
                    Coloque background.png/jpg e main.png/jpg
                  </p>
                </div>
                <br />
                <div className="form-rowAdd submit-btnAdd justifyContent">
                  <div className="input-dataAdd">
                    <div className="innerAdd"></div>
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <FooterApp />
    </>
  );
};

export default AddForum;
