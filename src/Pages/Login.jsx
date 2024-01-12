import Navbar from "../Components/Navbar";
import "../styles/login.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { loginUser } from "../utils/firebase";
import { signInWithGoogle } from "../utils/firebase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email, password);
  };

  return (
    <>
      <Helmet>
        <title>EcoForum | Login</title>
      </Helmet>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="card">
            <a className="signUp">Login</a>
            <div className="inputBox">
              <input
                type="text"
                minLength="3"
                maxLength="70"
                required="required"
                className="input"
                value={email}
                onChange={handleEmail}
              />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <input
                type="password"
                minLength="8"
                maxLength="30"
                className="input"
                value={password}
                onChange={handlePassword}
                required="required"
              />
              <span>Password</span>
            </div>

            <input type="submit" className="login" value="Login" />

            <button
              type="button"
              className="loginGoogle"
              onClick={signInWithGoogle}
            >
              <FcGoogle size={24} className="google" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
