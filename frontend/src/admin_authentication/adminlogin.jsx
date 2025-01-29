
import React, { useState } from "react";
import leftimgg from "../assets/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg";
import "../css/security.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";  

const AdminLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate(); 

  const Eventhandler = (e) => {
    e.preventDefault();  

    axios
      .post("http://localhost:4000/api/users/adminlogin", { email, password }) 
      .then((result) => {
        console.log("Login successful:", result.data);
       
        navigate("/admin");  
      })
      .catch((err) => {
        console.error("Login failed:", err);
        alert("Invalid email or password");
      });
  };

  return (
    <section className="page">
      <div className="left-side">
        <img src={leftimgg} alt="login" />
      </div>

      <div className="right-sidee">
        <div className="right-logo">
          <h1>Login as a Admin</h1>
          <p>If you already have an account, log in now</p>
        </div>

        <div className="form-part">
          
          <form onSubmit={Eventhandler}>
            <h4>Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <h4>Password</h4>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </div>

        <div>
          <p>If you don't have an account?</p>
          <a href="/adminsignup">Sign Up</a>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
