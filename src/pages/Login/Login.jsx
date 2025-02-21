//
import React, { useState } from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";
import Showquat from "../../components/Equiry/Showquat";

const Login = ({setValid,valid}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }
    // starpackersandmovers
    // star&$2024@star
    if (username === "s" && password === "s") {
      setLoggedIn(true);
      setError("");
      setValid(true)
      alert("Login successful!");
      
    
      // navigate("/showData");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

 

  return (
  
    <>
      
    {
      valid ? <Showquat/> : (
        <div className="Wrapper">
        <div className="contain">
          <div className="heading1">Admin Login</div>
          <div className="form">
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
                setError(""); 
              }}
              className="input"
            />

            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); 
              }}
              className="input"
            />

            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
      )
    }
        
      
    </>  


  );
};

export default Login;
