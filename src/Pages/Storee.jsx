import { Link } from "react-router-dom";
import "../styles/forumPost.css";
import {
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Store = () => {
  return (
    <>
      <section className="saveHead">
        <Link to="/ecoforum" className="iconDivForumProfile">
          <MdOutlineKeyboardArrowLeft className="mdForumProfile arrowLeft" size={50}/>
        </Link>
        <h1>Loja</h1>
      </section>
      <div className="underline"></div>
      <section>
        <div className="storeItens">
              <div className="carousel-item storeCardItem">
                <img className="carousel-item__img" src="https://cdn.discordapp.com/attachments/651924272746594304/1121225011412340756/roll_up.png" />
                <div className="carousel-item__details">
                  <div className="controls">
                    <span className="fas fa-play-circle"></span>
                    <span className="fas fa-plus-circle"></span>
                  </div>
                  <h5 className="carousel-item__details--title">Rollup</h5>
                  <h6 className="carousel-item__details--subtitle">
                    Rollup Ecoforum
                  </h6>
                </div>
              </div>
              <div className="carousel-item storeCardItem">
                <img className="carousel-item__img" src="https://media.discordapp.net/attachments/651924272746594304/1121225011760463972/tshirt.png?width=1014&height=676" />
                <div className="carousel-item__details">
                  <div className="controls">
                    <span className="fas fa-play-circle"></span>
                    <span className="fas fa-plus-circle"></span>
                  </div>
                  <h5 className="carousel-item__details--title">T-shirt</h5>
                  <h6 className="carousel-item__details--subtitle">
                    T-shirt Ecoforum
                  </h6>
                </div>
              </div>
              <div className="carousel-item storeCardItem">
                <img className="carousel-item__img" src="https://media.discordapp.net/attachments/651924272746594304/1121225012393807912/mousepad.png?width=450&height=676" />
                <div className="carousel-item__details">
                  <div className="controls">
                    <span className="fas fa-play-circle"></span>
                    <span className="fas fa-plus-circle"></span>
                  </div>
                  <h5 className="carousel-item__details--title">MousePad ecoforum</h5>
                  <h6 className="carousel-item__details--subtitle">
                      MousePad ecoforum
                  </h6>
                </div>
              </div>
              <div className="carousel-item storeCardItem">
                <img className="carousel-item__img" src="" />
                <div className="carousel-item__details">
                  <div className="controls">
                    <span className="fas fa-play-circle"></span>
                    <span className="fas fa-plus-circle"></span>
                  </div>
                  <h5 className="carousel-item__details--title">T-shirt</h5>
                  <h6 className="carousel-item__details--subtitle">
                    T-shirt Ecoforum
                  </h6>
                </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default Store;
