import { useState } from "react";
import "./styles/CreateAccount.css";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from 'axios'
 function CreateAccount() {
  const {email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName} = useAuth()
  const navigate = useNavigate();
  const goToStepper = (e) => {
    e.preventDefault();
    navigate("/otherDetails");
  };
  
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 style={{textAlign : 'center'}}>Create Account</h2>
        <p>Enter your basic details to continue</p>
        <form onSubmit={goToStepper}>

          {/* FULL NAME */}
          <div className="names">
            <div className="input-wrapper">
            <FiUser className="input-icon" />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>

           <div className="input-wrapper">
            <FiUser className="input-icon" />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>

          </div>
          {/* EMAIL */}
          <div className="input-wrapper">
            <FiMail className="input-icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="input-wrapper">
            <FiLock className="input-icon" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button className="auth-btn" type="submit">Next</button>
        </form>
        <p className="switch-auth">
         <span>Already have an account?</span><a style={{cursor : 'pointer'}} onClick={() => navigate('/login')}>Login</a>
        </p>
      </div>
    </div>
  );
}


export default CreateAccount;