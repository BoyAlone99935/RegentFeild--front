
import { useState } from "react";
import { FiPhone, FiCalendar, FiHome, FiShield, FiCamera } from "react-icons/fi";
import "./styles/otherDetails.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Spinner from "./Spinner";
import { useAuth } from "./AuthContext";
export default function OtherDetails() {
  const navigate = useNavigate()
  const [step, setStep] = useState(2);
  const [error , setError] = useState("")
  const {email , password , firstName , lastName , setUser , user , saveToken} = useAuth()
  const [loading , setLoading] = useState(false)
  const [form, setForm] = useState({  
    dateOfBirth: "",
    address: "",
    phone: "",
    pin: "",
    profileImage: null,
  });


  

  const handleSignIn = async () => {
    setLoading(true)
    localStorage.removeItem('token')
    try {
    console.log(form.profileImage)
    const formData = new FormData()
    formData.append("email" , email)
    formData.append("password" , password)
    formData.append("firstName" , firstName)
    formData.append("lastName" , lastName)
    formData.append("dateOfBirth" , form.dateOfBirth)
    formData.append("address" , form.address)
    formData.append("phone" , form.phone)
    formData.append("profileImage" , form.profileImage)
    formData.append('pin' , form.pin)
    const response = await axios.post("https://regent-feild.vercel.app/api/auth/signUp", formData);
    saveToken(response.data.token);
    console.log(response.data)
    localStorage.setItem('token' , response.data.token)
    setLoading(false)
    return true
    } catch(err) {
      console.error(err)
      setError(err.response?.data?.msg || "Something went wrong");
      setLoading(false)
      return false
    }
  }
 
  // handleChange
  const handleChange = (e) => {
    const { name, files, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files && files.length > 0 ? files[0] : value,
    }));
  };



  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <>
    {loading && <Spinner/>}
    <div className="step-container">

      {step === 2 && (
        <div className="step">
          <h2 className="step-title">Personal details</h2>

            <div className="input-group">
            <FiCalendar className="input-icon" />
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
            />
          </div>

          <div className="input-group">
            <FiHome className="input-icon" />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </div>

          <div className="input-group">
            <FiPhone className="input-icon" />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
            />
          </div>

          <div className="btn-row">
            <button onClick={back} className="btn-secondary">Back</button>
            <button onClick={next} className="btn-primary">Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <h2 className="step-title">Security & Profile</h2>

          <div className="input-group">
            <FiShield className="input-icon" />
            <input
              type="password"
              name="pin"
              value={form.pin}
              onChange={handleChange}
              placeholder="Transfer PIN"
            />
          </div>

          <label className="upload-label">Profile Photo</label>
          <div className="upload-box">
            <input type="file" name="profileImage" accept="image/*" onChange={handleChange} className="pf" />
            <FiCamera className="upload-icon" />
          </div>

          <div className="btn-row">
            <button onClick={back} className="btn-secondary">Back</button>
            <button className="btn-primary" onClick={async () => {
              const res = await handleSignIn()
              res && navigate('/dashboard')
            }}>Finish</button>
          </div>
        </div>
      )}
    </div></>
  );
}
