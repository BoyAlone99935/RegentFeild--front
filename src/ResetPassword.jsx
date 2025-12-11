import React from 'react'
import './styles/Security.css'
import { useState , useEffect } from 'react';
import { useAuth } from "./AuthContext";
import { LucideChevronDown, Mail } from "lucide-react";

function ResetPassword() {
  const [openEdit , setOpenEdit] = useState(false)
  const [email , setEmail] = useState("")
  const [open , setOpen] = useState(false)
  const {userDetails , getUserDetails , user , handlePasswordReset} = useAuth()
  const [loading , setLoading] = useState(false)
  const [success , setSuccess] = useState(false)

  useEffect(() => {
    getUserDetails()
  },[user]) 

  return (
    <div className="setting-card">
      <div className="setting-content">
        <div className="setting-text">
          <h4>Change Account Password</h4>
          <p>
            Keep your account secure by updating your password.  
            A reset link will be sent to your registered email.
          </p>
        </div>

        <div className="setting-action">
          {openEdit ? (
            <button 
              className="btn-primary" 
              onClick={async () => {
                setLoading(true);
                try {
                  await handlePasswordReset(email);
                  setSuccess(true);
                } finally {
                  setLoading(false);
                  setOpenEdit(false);
                }
              }}
              disabled={loading}
            >
              {loading ? <span className="spinner"></span> : "Done"}
            </button>
          ) : (
            <button className="btn-primary" onClick={() => setOpenEdit(true)}>
              <Mail/> Send reset link
            </button>
          )}
        </div>

        {openEdit && (
          <div className="input-wrapper">
            <LucideChevronDown size={18} className="input-icon" onClick={() => setOpen(!open)}/>
            <input 
              type="email" 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
            />
          </div>
        )}

        {open && (
          <div className="select">
            <button onClick={() => {
              setEmail(userDetails.email)
              setOpen(false)
            }}>
              Send to registered email
            </button>
          </div>
        )}

        {/* Success message */}
        {success && <p className="success-text">Reset link sent successfully , check spam!</p>}
      </div>
    </div>
  )
}

export default ResetPassword
