import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Textbox from "../../Components/Textbox/Textbox";
// const baseUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Make a request to the login endpoint
    try {
      let res = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
        credentials: "include",
      });
      let data = await res.json();

      // If successful, do some logic to figure out what page to navigate to
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      setErrors(["An unknown error has occured"]);
    }
  };
  // Return a page with errors if populated
  return (
    <div className="loginpage">
      <div className="loginpage-center-piece">
        <h2>Sign in</h2>
        <Textbox
          value={email}
          placeholder="Email"
          type="email"
          onChange={setEmail}
        />
        <Textbox
          value={password}
          placeholder="Password"
          type="password"
          onChange={setPassword}
        />
        <button
          type="submit"
          className="loginpage-button"
          onClick={handleSubmit}
        >
          Login
        </button>
        <Link to="/signup">Create Account</Link>
      </div>
    </div>
  );
};
export default Login;
