import "./styles/Transfer.css";
import { Delete, Pin } from "lucide-react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useLocation } from "react-router-dom";
import warning from './assets/warn.png'
import { useNavigate } from "react-router-dom";
import Spinner from './Spinner'
import { useState } from "react";
export default function TransactionPin() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCancelModal, setShowCancelModal] = useState(false); 
  const [loading , setLoading] = useState()
  const location = useLocation();
  const navigate = useNavigate()
  const {user ,  setTransaction ,  setBalance , balance ,  refreshTransactions , refreshNotifications ,  refreshBeneficiary} = useAuth()
  const recipientDetails = location.state.recipient;
  console.log(recipientDetails)
  const newBal = user.AccountBalance - parseInt(recipientDetails.amount.replace(/\D/g, ''), 10)
  console.log(newBal)
  const token = localStorage.getItem('token')
  const handleProcessingTransaction = async () => {
    setLoading(true)
    try {
    const res = await axios.post('https://regent-feild.vercel.app/api/transfer/send', 
    {
    amount : parseInt(recipientDetails.amount.replace(/\D/g, ''), 10),
    beneficiary : recipientDetails.name,
    beneficiaryInstitution : recipientDetails.bank,
    source : user.name,
    sourceInstitution : 'RegentFeild',
    myAccountNumber : user.AccountNumber,
    senderAccountNumber: recipientDetails.accountNumber,
    newBal,
    before : user.AccountBalance,
    after : newBal,
    logo :recipientDetails.logo
  },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  )
    const transaction = res.data
    setTransaction(prev => [transaction , ...prev])
    setBalance(res.data.newBal)
    console.log(balance)
    console.log(transaction)
    setLoading(false)
    refreshTransactions()
    refreshNotifications()
    refreshBeneficiary()
    navigate('/sucess' ,   { state: { recipient: {transaction} , logo : recipientDetails.logo}})
  } catch(err) {
    console.error(err)
    setLoading(false)
  }
  }
  console.log(user.transferPin , pin.join(""))
  console.log(user)
  const handleKey = (value) => {
    if (activeIndex < 4) {
      const newPin = [...pin];
      newPin[activeIndex] = value;
      setPin(newPin);
      setActiveIndex(activeIndex + 1);

      // Auto-submit after 4 digits (remove if you don’t want)
      if (activeIndex === 3) {
        setTimeout(async() => {
          if (Number(newPin.join("")) === Number(user.transferPin)) {
          console.log('PIN matches!');
          handleProcessingTransaction()
        } else {
          console.log('PIN does not match!');
          setShowCancelModal(true)
          // Reset PIN input
          setPin(["", "", "", ""]);
          setActiveIndex(0);
        }
        }, 300); 
      }
    }
  };

  const handleDelete = () => {
    if (activeIndex > 0) {
      const newPin = [...pin];
      newPin[activeIndex - 1] = "";
      setPin(newPin);
      setActiveIndex(activeIndex - 1);
    }
  };
   
  return (
   <>
   {loading && <Spinner/>}
   <div className="tom">
    <div className="headerrr">
        <span style={{color : 'white'}}>Authorize Payment</span>
      </div>
     <div className="pin-screen" >
      {/* Header */}
      
      <div className="pin-header">
        <h1>Enter Transaction Pin</h1>
        <p>To complete this transaction, enter your transaction pin</p>
      </div>

      {/* PIN Boxes */}
      <div className="pin-boxes">
        {pin.map((digit, index) => (
          <div
            key={index}
            className={`pin-box ${index === activeIndex ? "active" : ""}`}
          >
            {digit || (index === activeIndex ? "|" : "")}
          </div>
        ))}
      </div>

      {/* Keypad */}
      <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button key={num} onClick={() => handleKey(num.toString())}>
            {num}
          </button>
        ))}
        <div></div> {/* empty cell */}
        <button onClick={() => handleKey("0")}>0</button>
        <button onClick={handleDelete} className="delete">
          <Delete/>
        </button>
      </div>
    </div>
    {showCancelModal && (
        <>
          {/* Dark blur overlay */}
          <div
            className="cancel-overlay"
            onClick={() => setShowCancelModal(false)}
          />

          {/* Bottom slide-up modal */}
          <div className="cancel-modal">
            <div className="cancel-handle" />

            <div className="cancel-icon">
              <img src={warning}/>
            </div>

            <h2 style={{color : 'white'}}>Incorrect Transaction PIN</h2>
            <p>
             This account will be locked permanantly after five more failed attempts
            </p>
            <button
              className="cancel-btn"
              onClick={() => {
                setShowCancelModal(false);
                navigate('/support'); // or navigate("/") if you want to go home
              }}
            >
              Contact Support Team
            </button>
          
          </div>
        </>
      )}
   </div></>
  );
}
