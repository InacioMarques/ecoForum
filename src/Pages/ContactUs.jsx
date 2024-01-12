import { useState } from "react";
import { Helmet } from "react-helmet";
import { createUserFeedback } from "../utils/firebase";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/contactus.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const feedback = {
      firstName,
      lastName,
      email,
      message,
      subject,
    };

    createUserFeedback(feedback);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <>
      <Helmet>
        <title>EcoForum | Contact Us</title>
      </Helmet>
      <Navbar />
      <section className="sectionContactus">
        <div className="containerUs">
          <div className="text help">Percisa de ajuda?</div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={handleFirstName}
                />
                <div className="underline"></div>
                <label htmlFor="">Primeiro nome</label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={handleLastName}
                />
                <div className="underline"></div>
                <label htmlFor="">Apelido</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={handleEmail}
                />
                <div className="underline"></div>
                <label htmlFor="">Email</label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={handleSubject}
                />
                <div className="underline"></div>
                <label htmlFor="">Assunto</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea
                  rows="8"
                  cols="80"
                  required
                  value={message}
                  onChange={handleMessage}
                ></textarea>
                <br />
                <div className="underline"></div>
                <label htmlFor="">A sua mensagem</label>
                <br />
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner"></div>
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
