import React from 'react'
import { FaExchangeAlt } from 'react-icons/fa'
import megaphone from '../src/assets/cent.png'
import crypto from '../src/assets/crypto.png'
import bull from '../src/assets/bulls.png'
import warning from './assets/warn.png'
import { useAuth } from './AuthContext'
import { formatDate1 } from './FormattDate'
import Spinner from './Spinner'
import {
  Settings,
  Copy,
  ArrowUpDown,
  EyeOff,
  File,
  History,
  Plus,
  CreditCard,
  Loader2,
  Gauge,
  Monitor,
  Wifi,
  ArrowDown,
  ArrowUp,
  Eye,
  Sliders,
  ArrowLeftRight,
  Share2,
} from "lucide-react"
import { useNavigate } from 'react-router-dom'
import './styles/Dashboard.css'
import { useState } from 'react'
import { useEffect } from 'react'
function DashHome() {
  const [tab , setTab] = useState("month")
  const [open , setOpen] = useState(true)
  const [showCancelModal , setShowCancelModal ] = useState(false)
  const {user , notifications , transactions , balance} = useAuth()
  useEffect(() => {
   console.log('hello people')
   console.log(transactions)
  },[])
  
  const navigate = useNavigate()
  
 function truncate(text, max) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}
  if (!user) return <Spinner />;
  return (
    <div>
      {/* BALANCE CARD */}
      <div className='balance'>
        <div className='details'>
          <span className='acct-info'>{user.AccountNumber} • {user.name}</span>
          <Copy className='icon-btn' size={'13px'}/>
        </div>

        <div className='amount'>
         {
          open && <span className='amount-text'>
            ${user ? `${user.AccountBalance.toLocaleString()}.00` : 'loading...'}
          </span>
         }
         {
          open ? <EyeOff size={15} className='icon-btn' onClick={() => setOpen(!open)}/>   :   <Eye size={15} className='icon-btn' onClick={() => setOpen(!open)}/>
         }
        </div>

        <p className='updated'>Last updated just now</p>

        <div style={{ display: 'flex', gap: '5px' , marginTop :  '10px'}}>
          <div className='history'>
            <History size={13} />
            <span>History</span>
          </div>

          <div className='history' onClick={() => setShowCancelModal(true)}>
            <Plus size={13} />
            <span>Add Money</span>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className='services'>
        <p style={{color:'grey'}}>Services</p>

        <div className='service-list'>
          <div className='service-item' onClick={() => navigate('/start-transfer')}>
            <ArrowLeftRight size={13} />
            <p>Transfer</p>
          </div>

          <div className='service-item'>
            <File size={13} />
            <p>Statement</p>
          </div>

          <div className='service-item'>
            <Wifi size={13} />
            <p>Network</p>
          </div>

          <div className='service-item' onClick={() => navigate('/limit')}>
            <Gauge size={13} />
            <p>Limit</p>
          </div>

          <div className='service-item'>
            <Loader2 size={13} />
            <p>Recurring</p>
          </div>

          <div className='service-item'>
            <CreditCard size={13} />
            <p>Card</p>
          </div>

          <div className='service-item'>
            <Monitor size={13} />
            <p>TV</p>
          </div>

          <div className='service-item'>
            <Sliders size={13} />
            <p>Settings</p>
          </div>
        </div>
      </div>

      {/* REWARDS SECTION */}
      <div className='rewards'>
        <p style={{color:'grey'}}>Rewards</p>

        <div className='reward-container'>
          <div className='reward-content'>
          <div>
            <img src={crypto} alt="crypto" />
            <p className='p'>Crypto holdings</p>
           <div style={{display : 'flex', alignItems : 'center', gap : '7px'}}>
             <span>$23,786.80</span> <p className='highlight2'>+4.3%</p>
           </div>
          </div>
        </div>

        <div className='referals'>
          <img src={megaphone} alt="megaphone" />
          <p className='p'>Cashback</p>
          <div>
             <div style={{display : 'flex', alignItems : 'center', gap : '13px'}}>
             <span>$48.17</span> <p className='highlight2'>+12.4%</p>
           </div>
          </div>
        </div>
        </div>
      </div>
     {/*RECENT TRANSACTIONS*/}
     <div>
        {
          transactions.length > 0 && <div className='recent-transactions-header'>
          <p style={{marginBottom:'10px' , color:'grey'}}>Recent Transactions</p>
          <span className='viewAll' style={{cursor : 'pointer'}} onClick={() => navigate('/transaction')}>View all</span> 
        </div>
        }
       {
        transactions.length > 0 &&  <div className="transaction-cont">
  {Array.isArray(transactions) && transactions.length > 0
    ? transactions.slice(0, 4).map((transaction, index) => {
        // extra safety in case a transaction is temporarily undefined
        if (!transaction || !transaction.type) return null;

        return (
          <div key={index} className="transaction">
            <div className="left">
              <div className={`icon ${transaction.type.toLowerCase()}`}>
                {transaction.type === "credit" ? <ArrowDown /> : <ArrowUp />}
              </div>

              <div className="detail">
                <p className="beneficiary">{truncate(transaction.beneficiary, 14)}</p>
                <span className="time">{formatDate1(transaction.createdAt)}</span>
              </div>
            </div>

            <span className={`amount ${transaction.type.toLowerCase()}`}>
              {transaction.type === "credit" ? "+" : "-"}$
              {transaction.amount?.toLocaleString()}
            </span>
          </div>
        );
      })
    : (
      // optional: show loader or placeholder when transactions not ready
      <p>Loading transactions...</p>
    )
  }
</div>
       }
  </div>
 <div>
   <p  style={{color : 'grey' , margin: '0px' , marginTop : '0.7rem'}}>Finance</p>
   <div className='finance'>
    <img src={bull}/>
    <div>
      <span className='finances'>Savings</span>
      <p>create a savings plan and get <span className='highlight'>up to %17.5 intrest per annum</span></p>
    </div>
  </div>
 </div>

 <div style={{marginTop : '1rem'}}>
  <p style={{color : 'grey' , margin: '0px' , marginTop : '0.7rem'}}>spending Trends</p>
  <div className='trends-container'>
    <div>
      <button className={`period ${tab === 'month' ? 'activee' : null}`} onClick={() => setTab("month")}>Month</button>
      <button className={`period ${tab === 'Week' ? 'activee' : null}`}  onClick={() => setTab("Week")}>Week</button>
    </div>
    <div className='inOut'>
      <div className='in'>
      <div style={{display : 'flex' , alignItems : 'center' , gap : '6px', marginBottom : '0.6rem'}}>
        <ArrowDown className='crediti' size={'13px'}/>
        <span className='creditii'>Money In</span>
      </div>
       <span className='figure'>${tab === 'month' ? user.inMonth.toLocaleString() : user.inWeek.toLocaleString()}</span>
      </div>
      <div className='out'>
        <div style={{display : 'flex' , alignItems : 'center' , gap : '6px' , marginBottom : '0.6rem'}}>
        <ArrowUp className='debiti' size={'13px'}/>
        <span className='debitii'>Money Out</span>
      </div>
      <span className='figure'>${tab === 'month' ? user.outMonth.toLocaleString() : user.outWeek.toLocaleString()}</span>
      </div>
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
             <h2 style={{color : 'white' , textAlign: 'start' ,  margin: '0px'}} className='add'>Add money</h2>
             <p style={{textAlign : 'start' , margin: '0px' , fontSize: '0.7rem'}}>Share bank details to add money to this account</p>
             <div className='acct-details'>
               <span className='no'>
                {user.AccountNumber}
               </span>
               <span className='na'>{user.name.toUpperCase()}</span>
             </div>
             <div className='buttons'>
               <button
               className="copy"
               onClick={() => {
                 setShowCancelModal(false);
               }}
             >
               <Copy size={17} fill=' rgb(255, 174, 0)'/> Copy
             </button>
             <button className='share'>
              <Share2 size={17}/> Share
             </button>
             </div>
           </div>
         </>
       )}
  </div>
  )
}

export default DashHome
