import React from "react";
import { useAuth } from "./AuthContext";
import "./styles/createAccount.css"; 
import companyLogo from './assets/cropped2.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VideoLoader from "./Loader";
function SignIn() {

  const { setEmail, setPassword ,   handleSignUp , signInWithGoogle , sucess , user } = useAuth();
  const navigate = useNavigate()
  const moveto = () => {
      if (user && user.uid) {
        navigate('/profileSetUp')
      }
  }
  return (
    <div className="signin-container">
      <div className="signin-card">
        {/* Heading */}
        <h2 className="signin-title">Create Your Account</h2>

       
        <div className="signin-inputs">
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={() => handleSignUp(moveto)} className="signUp">Create Account</button>
        <div className="signin-divider">
          <span>OR</span>
        </div>

       
        <button type="button" className="google-btn" onClick={() => signInWithGoogle(moveto)}>
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default SignIn;