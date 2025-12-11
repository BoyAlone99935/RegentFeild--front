
import { LucideCopy, LucideEye, LucideEyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import useWindowSize from './UseWindowSize'

function Balance() {
  const {width} = useWindowSize()
  const { balance, user, balanceStatus , hideBalance , setHideBalance , hideUid , setHideUid } = useAuth() 
  const accounts = [
  {
    type: "Checking Account",
    number: "1234567890",
    balance: 800000
  },
  {
    type: "Current Account",
    number: "9876543210",
    balance: 400000
  }
];

  const toggleHiddenStatus = () => setHideBalance(prev => !prev)
  const copyUID = () => {
    navigator.clipboard.writeText(user.uid)
    alert('UID copied!')
  }

  const formatBalance = (val) => {
    if (val === null || val === undefined) return 'Loading...'
    return `$${val.toLocaleString()} USD`
  }

  // Determine balance color based on status
  const getBalanceColor = () => {
    if (hideBalance) return '#9ca3af' // gray for hidden
    switch(balanceStatus) {
      case 'low': return '#ef4444' // red
      case 'pending': return '#f59e0b' // yellow
      case 'normal':
      default: return '#10b981' // green
    }
  }

  return (
    width > 768 ? <div className="balance-card">
      {/* UID Section */}
       <div className="uid-section">
        {
          hideUid ?<span>copy uid</span>:  <span className="uid-text">{`${user.uid.slice(0, 6)}...${user.uid.slice(-4)}`}</span>
        }
        <LucideCopy className="icon clickable" onClick={copyUID} />
      </div>

      {/* Balance Section */}
      <div className="balance-section">
        <p 
          className="balance-amount" 
          onClick={toggleHiddenStatus}
        >
          {hideBalance ? '****' : balance !== null && balance !== undefined ? formatBalance(balance) : 'Loading...'}
        </p>
        {hideBalance 
          ? <LucideEye className="icon clickable" onClick={toggleHiddenStatus} /> 
          : <LucideEyeOff className="icon clickable" onClick={toggleHiddenStatus} />}
      </div>

      <span className="balance-sub">(Total wallet balance)</span>

      {/* Optional Status Message */}
      {balanceStatus === 'pending' && <span className="balance-status">Deposit pending...</span>}
      {balanceStatus === 'low' && <span className="balance-status">Balance is low!</span>}
    </div> : <div className="accounts">
  {accounts.map((acc, i) => (
    <div key={i} className="account-card">
      <div className="account-header">
        <span className="account-type">{acc.type}</span>
        <LucideCopy
          className="icon clickable"
          onClick={() => copyToClipboard(acc.number)}
        />
      </div>

      <div className="account-number">
        {`${acc.number.slice(0, 4)} **** ${acc.number.slice(-4)}`}
      </div>

      <div className="account-balance">
        <h3 onClick={toggleHiddenStatus}>
          {hideBalance
            ? "****"
            : acc.balance !== null && acc.balance !== undefined
            ? formatBalance(acc.balance)
            : "Loading..."}
        </h3>
        {hideBalance ? (
          <LucideEye
            className="icon clickable"
            onClick={toggleHiddenStatus}
          />
        ) : (
          <LucideEyeOff
            className="icon clickable"
            onClick={toggleHiddenStatus}
          />
        )}
      </div>
    </div>
  ))}
</div>

  )
}

export default Balance
