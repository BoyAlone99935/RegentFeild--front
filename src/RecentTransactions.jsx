import React from 'react'
import { groupTransactionsByDate , formatDate1 } from './FormattDate'
import { useAuth } from './AuthContext'
import { ArrowDown, ArrowLeft, ArrowUp, SeparatorVertical, SortAsc, SortDesc } from 'lucide-react'
import './styles/History.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function RecentTransactions() {
  const [transaction , setTransaction] = useState({})
  const {transactions , refreshTransactions} = useAuth()
  const groupedTransactions = groupTransactionsByDate(transactions)
  console.log(groupedTransactions)
  function truncate(text, max) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}
 function truncate(text, max) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}
  const navigate = useNavigate()
  return (
      <div className="transactions-wrapper">
      <div className='tx-head'>
          <ArrowLeft size={17} onClick={() => (navigate(-1))}/>
          <p style={{fontWeight: '600'}}>Transactions</p>
          <SeparatorVertical size={17}/>
        </div>
       {Object.keys(groupedTransactions).map(date => (
      <div key={date} className="date-group">
        
        {/* DATE HEADER */}
        <p className="date-title">{date}</p>

        {/* TRANSACTIONS UNDER THIS DATE */}
        <div className="transaction-cont">
          {groupedTransactions[date].map((transaction, index) => {
            if (!transaction || !transaction.type) return null;

            return (
              <div key={index} className="transaction">
                <div className='newTx' onClick={() => {
                  setTransaction(transaction)
                  navigate('/transaction-details' , { state: { tx: transaction} })
                }}>
                  
                  <div className={`icon ${transaction.type.toLowerCase()}`}>
                    {transaction.type === "credit" ? <ArrowDown /> : <ArrowUp />}
                  </div>

                  <div className='cyber'>
                    <div className='topside'>
                      <span className='toName'>
                        {transaction.type === 'credit' ? 'From' : 'To'} {truncate(transaction.beneficiary, 14).toUpperCase()}
                      </span>

                      <span className={`toAmount ${transaction.type.toLowerCase()}`}>
                        {transaction.type === "credit" ? "+" : "-"}$
                        {transaction.amount?.toLocaleString()}
                      </span>
                    </div>

                    <div className='downside'>
                      <span className='tf-meth'>{transaction.method || "Transfer"}</span>
                      <span className={`type ${transaction.type.toLowerCase()}`}>
                        {transaction.type}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    ))}

    </div>
  )
}

export default RecentTransactions
