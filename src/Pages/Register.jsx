import Navbar from "../Components/Navbar";
// import { initializeApp } from "firebase/app";
import { useState } from "react";
import "../styles/register.css";
import { Helmet } from "react-helmet";
import { createUser } from "../utils/firebase";

const Register = () => {
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
    createUser(email, password, username);
  };

  return (
    <>
      <Helmet>
        <title>EcoForum | Register</title>
      </Helmet>
      <Navbar />

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
    </>
  );
};

export default Register;
