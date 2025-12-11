import React, { useState } from "react";
import "./styles/profileSetUp.css";
import PinInput from "./OtpInput";
import useWindowSize from "./UseWindowSize";
import { useAuth } from "./AuthContext";
import VideoLoader from "./Loader";
import ComfirmPinInput from "./ComfirmPin";
import { useNavigate } from "react-router-dom";
function ProfileSetUp() {
  const [index, setIndex] = useState(0);
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [errmsg , setErrMsg] = useState("")
  const [phone, setPhone] = useState("");
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [adress , setAdress] = useState("")
  const [zipCode , setZipCode] = useState("")
  const {tranctPin , comfirmPin , saveDetails} = useAuth()
  const [savedStatus , setSavedStatus] = useState(false)
  const {width} = useWindowSize()
  const navigate = useNavigate()
   const handleSaveDetails = async (birthdate , age , selectedCountry , phone , firstName , lastName , email , address , zipCode , tranctPin) => {
     try {
      setSavedStatus(true)
      await saveDetails(birthdate , age , selectedCountry , phone , firstName , lastName , email , address , zipCode , tranctPin)
     setTimeout(()  => {
        setSavedStatus(false)
        navigate('/Dashboard')
     } , 1500)
     }
     catch(err) {
       console.error(err)
       setSavedStatus(false)
     }
   }
  // Major countries with codes
  const countries = [
    { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
    { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
    { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
    { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
    { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
    { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
    { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
    { name: "China", code: "CN", dialCode: "+86", flag: "🇨🇳" },
    { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
    { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
    { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
    { name: "Russia", code: "RU", dialCode: "+7", flag: "🇷🇺" },
    { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },
    { name: "South Korea", code: "KR", dialCode: "+82", flag: "🇰🇷" },
    { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
    { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
    { name: "Norway", code: "NO", dialCode: "+47", flag: "🇳🇴" },
    { name: "Denmark", code: "DK", dialCode: "+45", flag: "🇩🇰" },
    { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
    { name: "Turkey", code: "TR", dialCode: "+90", flag: "🇹🇷" },
    { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
    { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
    { name: "Argentina", code: "AR", dialCode: "+54", flag: "🇦🇷" },
    { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
    { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
    { name: "Hong Kong", code: "HK", dialCode: "+852", flag: "🇭🇰" },
    { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
  ];

  const nextStep = () => {
    if (index === 1 && birthdate) {
      const age = getAge(birthdate);
      if (age < 18) {
        setErrMsg('Must be above 18')
        return;
      } else {
        setErrMsg('')
      }
    }
     setIndex((i) => i + 1);
  };

   

  const prevStep = () => {
    setErrMsg('')
    setIndex((i) => (i > 0 ? i - 1 : i));
  };

  const getAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const getage = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <>
     {
      savedStatus ? <VideoLoader/> : <div className="ext">
      <div className="profile-cont">
        {/* Step 1: Name */}
        <div className={index === 0 && "show"} style={{ display: "none" }}>
          <h1>What's your name?</h1>
          <p>Enter the name you use in real life</p>
          <div className="input-row">
            <input type="text" required placeholder="First name"  onChange={(e) =>setFirstName(e.target.value) }/>
            <input type="text" required placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <p className="helper">
            We ask this to make sure your profile is authentic and matches real records.
          </p>
          <div>
             <button type="button" onClick={() => {
            if (firstName === "" || lastName === "" ) {
              setErrMsg('Provide complete information')
            } else {
              nextStep()
              setErrMsg('')
            }
          }} className="nxt">
            Next
          </button>
          </div>
          <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 1/8</span>
          </div>
        </div>

        {/* Step 2: Birthday */}
        <div className={index === 1 && "show"} style={{ display: "none" }}>
          <h1>What's your birthday?</h1>
          <input
            type="date"
            required
            className="date-input"
            onChange={(e) => {
              setBirthdate(e.target.value);
              getage(e.target.value);
            }}
          />
          {age > 0 && <p>{age} years old</p>}
          <p className="helper">
            We use your date of birth to verify you meet the minimum age requirement.
          </p>
          <div className="btns">
            <button onClick={prevStep}>Previous</button>
            <button  onClick={() => {
            if (birthdate === "" ) {
              setErrMsg('Plese input birthdate')
            } else {
              setErrMsg('')
              nextStep()
            }
          }}>
            Next
          </button>
          </div>
          <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 2/8</span>
          </div>
        </div>

        {/* Step 3: Nationality */}
        <div className={index === 2 && "show"} style={{ display: "none" }}>
          <h1>What's your nationality?</h1>
          <div>
            <select
              required
              className="inputss"
              value={selectedCountry ? selectedCountry.name : ""}
              onChange={(e) => {
                const country = countries.find((c) => c.name === e.target.value);
                setSelectedCountry(country || null);
              }}
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>
          <p className="helper">
            Nationality helps us understand your legal identity and tailor services to your region.
          </p>
          <div className="btns">
            <button onClick={prevStep}>Previous</button>
             <button  onClick={() => {
            if (selectedCountry === null ) {
              setErrMsg('Please input nationality')
            } else {
              setErrMsg('')
              nextStep()
            }
          }}>
            Next
          </button>
          </div>
           <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 3/8</span>
          </div>
        </div>

        {/* Step 4: Email */}
        <div className={index === 3 && "show"} style={{ display: "none" }}>
          <h1>What's your email?</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="email" required placeholder="Email address" className="inputs" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <p className="helper">
            We’ll use your email for login, account recovery, and important notifications.
          </p>
          <div className="btns">
            <button onClick={prevStep}>Previous</button>
            <button  onClick={() => {
            if (email === "" ) {
              setErrMsg('Please input email')
            } else {
              setErrMsg('')
              nextStep()
            }
          }}>
            Next
          </button>
          </div>
           <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 4/8</span>
          </div>
        </div>

        {/* Step 5: Phone number */}
        <div className={index === 4 && "show"} style={{ display: "none" }}>
          <h1>What's your phone number?</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
           <input
            type="tel"
            required
            className="inputs"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          </div>
          <p className="helper">
            We’ll use your phone for verification and account security. You can clear the code if needed.
          </p>
          <div className="btns">
            <button onClick={prevStep}>Previous</button>
            <button  onClick={() => {
            if (phone === "" ) {
              setErrMsg('Please input Phone number')
            } else {
              setErrMsg('')
              nextStep()
            }
          }}>
            Next
          </button>
          </div>
           <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 5/8</span>
          </div>
        </div>


        {/* Step 7: Address */}
        <div className={index === 5 && "show"} style={{ display: "none" }}>
          <h1>Where do you live?</h1>
          <div className="input-row" style={{ marginTop: "1rem" }}>
            <input type="text" required placeholder="Address" onChange={(e) => setAdress(e.target.value) }/>
            <input type="text" required placeholder="Zip Code" onChange={(e) => setZipCode(e.target.value)}/>
          </div>
          <p className="helper">
            We need your address to confirm residency and provide region-specific services.
          </p>
          <div className="btns">
            <button onClick={prevStep}>Previous</button>
             <button onClick={() => {
            if (adress === "" || zipCode === "" ) {
              setErrMsg('Provide complete information')
            } else {
              nextStep()
              setErrMsg('')
            }
          }}>
            Next
          </button>
             
          </div>
           <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 6/8</span>
          </div>
        </div>

          {/* Step 6: Transaction PIN */}
        <div className={index === 6 && "show"} style={{ display: "none" }}>
           <h1 >{width > 768 ? 'Create a 4-digit Transaction PIN' : 'Create a 4-digit Transaction PIN'}</h1>
          <div className="input-cont" style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "1rem" }}>
            <PinInput/>
          </div>
          
          <p className="helper">
            This PIN will be required for sensitive transactions and ensures your account security.
          </p>
          
          <div className="btns">
            <button onClick={prevStep}>Previous</button>
             <button  onClick={() => {
            if (tranctPin === "" ) {
              setErrMsg('Please input Phone number')
            } else {
              setErrMsg('')
              nextStep()
            }
          }}>
            Next
          </button>
          </div>
           <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 7/8</span>
          </div>
        </div>
        <div className={index === 7 && "show"} style={{ display: "none" }}>
           <h1>Comfirm Transaction pin</h1>
          <div className="input-cont" style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "1rem" }}>
            <ComfirmPinInput/>
          </div>
          
          <p className="helper">
            This PIN will be required for sensitive transactions and ensures your account security.
          </p>
          
          <div className="btns">
            <button onClick={prevStep}>Prev</button>
            <button
            onClick={() => {
              if (tranctPin.length === 4 && comfirmPin.length === 4) {
                if (tranctPin === comfirmPin) {
                  setErrMsg("");
                  handleSaveDetails(birthdate , age , selectedCountry , phone , firstName , lastName , email , adress , zipCode , tranctPin)
                } else {
                  setErrMsg("Transaction pins don’t match");
                }
              } else {
                setErrMsg("⚠ Please complete both pins");
              }
            }}
          >
            Next
          </button>
          </div>
           <div style={{textAlign : 'center' , marginTop : '1rem'}}>
            <span style={{textAlign : 'center' , color : 'grey'}}>Step 8/8</span>
          </div>
        </div>
        <p style={{color : 'red'}}>{errmsg}</p>
      </div>
    </div>
     }
    </>
  );
}

export default ProfileSetUp;