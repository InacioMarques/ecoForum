import "../styles/intruduction.css";
import { useState } from "react";
import "../styles/register.css";
import { createUser } from "../utils/firebase";
import { Link } from "react-router-dom";

const Intruduction = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(email, password);
  };

  return (
    <>
      <section className="section logoText">
        <div>
          <img
            className="textImage"
            src="https://firebasestorage.googleapis.com/v0/b/ecoproject-65d4a.appspot.com/o/devImages%2Ftexto.png?alt=media&token=f287e094-823b-4652-a076-224a06c64915"
          />
          <h1 className="logoTextH1 h1Titles">
            Junte-se e partilhe as suas ideias
          </h1>
        </div>
      </section>

      <section className="section isEcoforum">
        <div>
          <h1 className="h1Titles">O que é o EcoForum?</h1>
        </div>
        <div className="divPForum">
          <p>
          O Ecoforum é uma aplicação web e mobile 
          que disponibiliza a comunicação entre vários utilizadores 
          da mesma a compartilhar e sensibilizar 
          as ideias para um sistema mais ecológico. 
          Este documento se trata da memoria descritiva 
          de toda a ideia e pensamentos por de trás do design.
          </p>
        </div>
      </section>

      <section className="section theApp heightAuto">
        <div>
          <h1 className="h1Titles">O forum</h1>
        </div>
        <div>
          <div className="carddd">
            <img width="20%" src="https://media.discordapp.net/attachments/651924272746594304/1121221358140010516/Screenshot_20230622_003053_Chrome.jpg?width=277&height=616" />
            <div className="card-content">
              <h2>Novo forum</h2>
              <p>
                Compartilha as tuas ideias com varias pessoas com os mesmos
                pensamentos e ideias.
              </p>
              <Link to="/register" className="button">
                Descobre mais
              </Link>
            </div>
          </div>
          <div className="carddd">
            <img src="https://media.discordapp.net/attachments/651924272746594304/1121221357200490600/Screenshot_20230622_003255_Chrome.jpg?width=277&height=616" />
            <div className="card-content">
              <h2>forum</h2>
              <p>
                Interage com varias pessoas com os mesmos interesses
              </p>
              <Link to="/register" className="button">
                Descobre mais
              </Link>
            </div>
          </div>
          <div className="carddd">
            <img src="https://media.discordapp.net/attachments/651924272746594304/1121221357666041866/Screenshot_20230622_003224_Chrome.jpg?width=277&height=616" />
            <div className="card-content">
              <h2>Varios chats</h2>
              <p>
                Todos ao seu rodor estao para ti
              </p>
              <Link to="/register" className="button">
                Descobre mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section theStore heightAuto">
        <div>
          <h1 className="h1Titles">A nossa loja</h1>
        </div>
        <div>
          <div className="carousel__container">
            <div className="carousel-item">
              <img className="carousel-item__img" src="https://media.discordapp.net/attachments/651924272746594304/1121225011412340756/roll_up.png?width=478&height=676" />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Rollup</h5>
                <h6 className="carousel-item__details--subtitle">
                  Rollup do ecoforum
                </h6>
              </div>
            </div>

            <div className="carousel-item">
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

            <div className="carousel-item">
              <img className="carousel-item__img" src="https://media.discordapp.net/attachments/651924272746594304/1121225012393807912/mousepad.png?width=450&height=676" />
              <div className="carousel-item__details">
                <div className="controls">
                  <span className="fas fa-play-circle"></span>
                  <span className="fas fa-plus-circle"></span>
                </div>
                <h5 className="carousel-item__details--title">Tapete de rato</h5>
                <h6 className="carousel-item__details--subtitle">
                  Tapete de rato Ecoforum
                </h6>
              </div>
            </div>

            <div className="carousel-item">
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

            <div className="carousel-item">
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

            <div className="carousel-item">
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

            <div className="carousel-item">
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

            <div className="carousel-item">
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
        </div>
      </section>

      <section className="section regist">
        <h1 className="h1Titles">Register-se agora</h1>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="card">
              <a className="signUp">Sign Up</a>

              <div className="emailInput">
                <input
                  type="email"
                  className="input"
                  required="required"
                  value={email}
                  onChange={handleEmail}
                />
                <span>Email</span>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  minLength="3"
                  maxLength="70"
                  required="required"
                  className="input"
                  value={username}
                  onChange={handleUsername}
                />
                <span>Username</span>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  minLength="8"
                  maxLength="30"
                  className="input"
                  required="required"
                  value={password}
                  onChange={handlePassword}
                />
                <span>Password</span>
              </div>

              <input type="submit" className="register" value="Register" />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Intruduction;
