import { ArrowLeft, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toWords } from "number-to-words";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom"; 
import warning from './assets/warn.png'
function ConfirmPayment() {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false); 

  const getInitials = (name) => name.split(' ').map(word => word[0]).join('');
  const location = useLocation();
  const recipientDetails = location.state.recipient;
  const { user , balance } = useAuth();

  const numericAmount = Number(recipientDetails.amount.replace(/,/g, ""));

  const formattedAmount = numericAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const plusFee = numericAmount + 10;
  const formattedAmountPlusFee = plusFee.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let amountInWords = "";
  if (!isNaN(numericAmount)) {
    amountInWords =
      toWords(numericAmount)
        .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()) + " dollars";
  }

  return (
    <>
     
      <div className="confirm-payment-cont">
        <div className="header">
          <ArrowLeft size={'20px'} />
          <span>Confirm Payment</span>
          <X size={'20px'} onClick={() => setShowCancelModal(true)} style={{ cursor: 'pointer' }} />
        </div>

        <div className="amount-section">
          <span className="tf-amount">{formattedAmount}</span>
          <p className="amount-words">{amountInWords}</p>
          <span className="cashback">$5 Cashback</span>
        </div>

        <div className="details-box">
          <div className="where-to">
            <span>To {recipientDetails.name}</span>
            <div>
              <img src={recipientDetails.logo} alt="bank logo" />
              <span>{recipientDetails.bank}</span>•<span>{recipientDetails.accountNumber}</span>
            </div>
          </div>
          <div className="acessories">
            <div>
              <span className="dim">Recipient gets</span>
              <span className="dim">{recipientDetails.amount}.00</span>
            </div>
            <div className="demacator">
              <span className="dim">Fee</span>
              <span style={{ marginBottom: '5px' }} className="dim">$10</span>
            </div>
            <div>
              <span style={{ fontFamily: 'Inter' }}>Total debit</span>
              <span>{formattedAmountPlusFee}</span>
            </div>
            <div>
              <span className="dim">Cashback earned</span>
              <span className="cash-back-color">$5</span>
            </div>
          </div>
        </div>

        <div className='paying-from' style={{ marginTop: '1rem' }}>
          <p className='Titless'>Paying From</p>
          <div className='paying'>
            <span className='initials'>{user.name ? getInitials(user.name).toUpperCase() : "ME"}</span>
            <div>
              {user ? <p>{user.name} • {user.AccountNumber}</p> : <p>Anthony Montenegro Boyd • 7738298201</p>}
              <span className='bal'>{user ? `${balance.toLocaleString()}.00` : "$73,400.00"}</span>
            </div>
          </div>
        </div>

       <div className="narate">
         <div className="narration">
          <input type="text" placeholder="Narration (optional)" />
          <p>Add narration to this transaction</p>
        </div>

        <div className="pay">
          <button onClick={() => {
            if (user.transfer) {
              navigate('/transaction-pin' , { state: { recipient: recipientDetails} })
            } else {
             setShowCancelModal(true)
            }
          }}>Pay</button>
        </div>
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

            <h2 style={{color : 'white'}}>{user.transfer ? "Cancel Payment" : "Account Verification Error"}</h2>
            <p>
             {
              user.transfer ?   `You're about to cancel your transfer to ${recipientDetails.name.toUpperCase()}. Are you sure you want to do this?`: "There was an issue with verifying your account information, please contact our support team." 
             }
            </p>

           <>
           {
            user.transfer ? <>
             <button
              className="cancel-btn"
              onClick={() => {
                setShowCancelModal(false);
                navigate(-1); // or navigate("/") if you want to go home
              }}
            >
             Cancel payment
            </button>

            <button
              className="continue-btn"
              onClick={() => setShowCancelModal(false)}
            >
              No, Continue with Payment
            </button></>
           :  <button
              className="cancel-btn"
              onClick={() => {
                setShowCancelModal(false);
                navigate('/support'); // or navigate("/") if you want to go home
              }}
            >
              Contact Support Team
            </button>}</>
          </div>
        </>
      )}
    </>
  );
}

export default ConfirmPayment;