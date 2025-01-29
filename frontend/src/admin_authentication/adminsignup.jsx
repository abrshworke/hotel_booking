
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import "../css/security.css";
import signupimgg from "../assets/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg";

const AdminSignup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const navigate = useNavigate(); 

  const Eventhandler = (e) => {
    e.preventDefault();
    
    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:4000/api/users/adminsignup", { name, email, password }) 
      .then((result) => {
        console.log("Signup successful:", result.data);

        navigate("/adminlogin");
        
      })
      .catch((err) => {
        console.error("Signup failed:", err);
        alert("Error during signup");
      });
  };

  return (
    <section className="page">
      <div className="left-side">
        <img src={signupimgg} alt="Sign up" />
      </div>

      <div className="right-sidee">
        <div className="right-logo">
          <h1>Sign Up Now</h1>
          <p>If you don't have an account, sign up now</p>
        </div>

        <div className="form-part">
          <form onSubmit={Eventhandler}>  
            <h3>Full Name</h3>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />

            <h3>Email</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <h3>Password</h3>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <h3>Confirm Password</h3>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
            />

            <button className="btn" type="submit">Sign Up</button>
          </form>
        </div>

        <div>
          <p>If you already have an account?</p>
          <a href="/adminlogin">Log in</a>
        </div>
      </div>
    </section>
  );
};

export default AdminSignup;




