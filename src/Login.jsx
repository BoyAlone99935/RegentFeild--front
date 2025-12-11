import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock , FiUser } from "react-icons/fi";
import "./styles/Login.css";
import Spinner from "./Spinner";
import { useAuth } from "./AuthContext";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const {setUser} = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("https://regent-feild.vercel.app/api/auth/login", form);
      localStorage.setItem('token' , res.data.token)
      setUser(res.data.user)
      // After login step 1, go to login-code page
      navigate("/login-code", { state: { email: form.email } });
    } catch (err) {
      console.log(err)
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {loading && <Spinner/>}
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="profile-icon">
          <FiUser />
        </div>
        <h2 className="login-title">Welcome Back</h2>

        {error && <p className="error">{error}</p>}

        <label className="input-wrap">
          <FiMail className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </label>

        <label className="input-wrap">
          <FiLock className="input-icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
        </label>

        <button type="submit" className="login-btn" disabled={loading}>
          Log In
        </button>

        <p className="login-terms">
          By continuing, you agree to our 
          <span className="highlight"> Terms of Service </span>
          and 
          <span className="highlight" onClick={() => navigate('/transaction-pin')}> Privacy Policy</span>.
        </p>
      </form>
    </div></>
  );
}
