import { useState } from "react";
import "./carbonEmission.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Textbox from "../../Components/Textbox/Textbox";

const CarbonEmission = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Called");
    if (submitDisabled) return;
    setSubmitDisabled(true);

    let res = await fetch(`http://localhost:5000/getCarbonData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    });

    if (res.status === 200) {
      navigate("/");
    } else {
      setSubmitDisabled(false);
    }
  };

  return (
    <div className="signuppage">
      <div className="signuppage-center-piece">
        <h2>Sign up</h2>
        <div className="signuppage-namefield">
          <Textbox
            value={firstName}
            placeholder="First Name"
            type="text"
            onChange={setFirstName}
          />
          <Textbox
            value={lastName}
            placeholder="Last Name"
            type="text"
            onChange={setLastName}
          />
        </div>
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
          disabled={submitDisabled}
        >
          Create Account
        </button>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default CarbonEmission;
