import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import './styles/Transfer.css'
import Spinner from './Spinner'
function AddAmount() {
  const location = useLocation()
  const recipientDetails = location.state.recipient
  console.log(recipientDetails)
  const { user , balance} = useAuth()
  const getInitials = (name) => name.split(' ').map(word => word[0]).join('');
  const navigate = useNavigate()
  const [amount, setAmount] = useState("");
  const [loading , setLoading] = useState(false)
const handleAmountChange = (e) => {
  let value = e.target.value;

  // remove non-digits
  value = value.replace(/\D/g, "");

  if (value === "") {
    setAmount("");
    return;
  }

  // format with commas
  const formatted = Number(value).toLocaleString();
  setAmount(formatted);
};

const handleContinue = () => {
  setLoading(true)
  setTimeout(() => {
   setLoading(false)
   const Details = {
    ...recipientDetails, amount
   }
   navigate('/comfirm-payment' , { state: { recipient: Details } })
  },2000)
}
  return (
    
   <>
   {loading && <Spinner message={'Authenthicating...'}/>}
    <div className='addMoney-container'>
      <div>
        <div className='transfer-title'>
        <ArrowLeft size={'17px'} onClick={() => navigate('/start-transfer')}/> <p>Add amount</p>
      </div>
      <div className='recp'>
        <div className='recipient-details'>
        <span>To</span>
        <img src={recipientDetails.logo}/>
        <span>{recipientDetails.name}</span>
      </div>
    </div>
     <div className='amount-cont'>
        <div className="amount-input">
          <span className="currency">$</span>
          <input
            className="amounts"
            type="text"
            inputMode="numeric"
            placeholder="0.00"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

       <span className='lim'>Enter an amount above $10</span>
       <div className='daily-lim'>
        <span   style={{textAlign : 'center'}}>Daily limit left to spend:</span><p>{user.limit ? `${user.limit.toLocaleString()}` : '$500,000'}</p>
       </div>
     </div>

     <div className='paying-from'> 
        <p className='Titless'>Paying from</p>
        <div className='paying'>
         <span className='initials'>{user.name ? getInitials(user.name).toUpperCase() : "ME"}</span>
         <div>
        {
          user ?  <p> {user.name} • {user.AccountNumber}</p> : <p>Anthony Montenegro Boyd • 7738298201</p>
        }
          <span className='bal'>{
            user ? `${balance.toLocaleString()}.00` : "$73,400.00"}</span>
         </div>
        </div>
      </div>
      </div>
      <div className='continue'>
        <div></div>
        <button className={`continuebtn ${amount === ""  || amount < 10? 'disabled' : ""}`} onClick={handleContinue}>Continue</button>
      </div>
    </div></>
  )
}

export default AddAmount
