import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Login.css";
import { FiLock } from "react-icons/fi";
import Spinner from "./Spinner";
import { useAuth } from "./AuthContext";

export default function LoginCode() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const email = location.state?.email || "your@email.com";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputsRef = useRef([]);

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const id = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(id);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // only numbers

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // take last digit
    setOtp(newOtp);

    // Auto-focus next
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    // Auto-submit when full
    if (newOtp.every((digit) => digit !== "")) {
      handleSubmit(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (paste.length > 0) {
      const newOtp = paste.split("").concat(["", "", "", "", "", ""]).slice(0, 6);
      setOtp(newOtp);
      inputsRef.current[paste.length - 1]?.focus();
      if (paste.length === 6) handleSubmit(paste);
    }
  };

  const handleSubmit = async (code = otp.join("")) => {
    if (code.length !== 6) return;

    setLoading(true);
    setError("");

    try {
      await axios.post("https://regent-feild.vercel.app/api/auth/compereLoginCode", {
        code,
        userId: user._id,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Incorrect verification code");
      console.log(err)
      setOtp(["", "", "", "", "", ""]); // clear boxes
      inputsRef.current[0].focus();
    } finally {
      setLoading(false);
    }
  };



 function maskEmailInstagramStyle(email) {
  const [username, domain] = email.split("@");

  if (username.length <= 2) {
    // Handle tiny usernames like "ab"
    return username[0] + "*" + "@" + domain;
  }

  const first = username[0];
  const last = username[username.length - 1];
  const masked = "*".repeat(username.length - 2);

  return `${first}${masked}${last}@${domain}`;
 }



  return (
    <div className="login-wrapper">
      {loading && <Spinner />}

      <div className="login-code">
        <div className="profile-icon">
          <FiLock />
        </div>

        <h2 className="verification" style={{fontSize : '1rem'}}>Enter Verification Code</h2>
        <p className="subtitle">
          We sent a 6-digit code to <strong>{maskEmailInstagramStyle(email)}</strong>
        </p>

        {error && <p className="error">{error}</p>}

        {/* OTP Boxes */}
        <div className="otp-container" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              className="otp-box"
              inputMode="numeric"
              autoFocus={index === 0}
            />
          ))}
        </div>

        {/* Timer + Resend */}
        <div className="resend-section">
      
           {canResend ? "" :  <p className="timer-text">
              Resend code in{" "}
              <span style={{ color: "#ff3300ff", fontWeight: "bold" }}>
                00:{timer.toString().padStart(2, "0")}
              </span>
            </p>}
      
        </div>

        <button
          type="button"
          className="verify-btn"
          onClick={() => handleSubmit()}
          disabled={loading || otp.join("").length !== 6}
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>
      </div>
    </div>
  );
}