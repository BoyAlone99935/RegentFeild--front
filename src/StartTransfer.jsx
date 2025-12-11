import React from 'react'
import './styles/Transfer.css'
import { useAuth } from './AuthContext'
import { ArrowLeft,  ChevronRight, Landmark, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spinner from './Spinner';
import santan from './assets/santan.png'
import chase from './assets/chase.png'
import America from './assets/America.png'
import wells from './assets/wells.png'
import usBank from './assets/us.png'
import pnc from './assets/pnc.png'
import scotia from './assets/scotia.png'
import standard from './assets/standard.png'
function StartTransfer() {
  const {user , balance , beneficiaries} = useAuth()
  const navigate = useNavigate()
  const getInitials = (name) => name.split(' ').map(word => word[0]).join('');
  const [accountNumber , setAccountNumber] = useState("")
  const [recipientName , setRecipientName] = useState("")
  const [searchBeneficiary ,  setSearchBeneficiary] = useState("")
  const [loading , setLoading] = useState(false)
  const [recipientDetails , setRecipientDetails] = useState({})
  const [searchBank , setSearchBank] = useState("")
  const handleBeneficiary  = (Details) => {
    setLoading(true)
    setRecipientDetails(Details)
    setTimeout(() => {
     setLoading(false)
     navigate('/add-amount' , { state: { recipient: Details } })
    },3000)
  }


  const handleManualDetails = 
  (accountNumber,
  recipientName,
  bankName,
  bankLogo) => {
    setLoading(true )
    const Details = {
      accountNumber,
      name:recipientName,
      bank :bankName,
      logo :bankLogo
    }
    console.log(Details)
    if (accountNumber === "" || recipientName === "") {
     console.error('please fill in feilds')
    }
    setTimeout(() => {
     setLoading(false)
     navigate('/add-amount' , { state: { recipient: Details } })
    },3000)
  }

  const beneficiary = [
  {
    name: "Michael Thompson",
    bank: "Bank of America",
    routingNumber: "026009593",
    accountNumber: "987654310245",
    accountType: "Savings",
    favourite : false,
    logo : America
  },
  {
    name: "Sophia Martinez",
    bank: "Wells Fargo",
    routingNumber: "121000248",
    accountNumber: "112349875320",
    accountType: "Checking",
    logo: wells,
    favourite : true
  },
  {
    name: "Christopher Adams",
    bank: "Chase Bank",
    routingNumber: "021000021",
    accountNumber: "654398120934",
    accountType: "Checking",
    logo: chase,
    favourite : false
  },
  {
    name: "Ava Richardson",
    bank: "Citibank",
    routingNumber: "021000089",
    accountNumber: "204873195682",
    accountType: "Savings",
    logo: "https://logo.clearbit.com/citi.com",
    favourite : true
  },
  {
    name: "Daniel Rivers",
    bank: "TD Bank",
    routingNumber: "031101266",
    accountNumber: "743109582760",
    accountType: "Checking",
    logo: "https://logo.clearbit.com/td.com",
    favourite : false
  }
];


const banks = [
  { 
    name: "JPMorgan Chase Bank", 
    country: "USA",
    logo: chase
  },
  { 
    name: "Bank of America", 
    country: "USA",
    logo : America
  },
  { 
    name: "Wells Fargo", 
    country: "USA",
    logo: wells
  },
  { 
    name: "Citibank", 
    country: "USA",
    logo: "https://logo.clearbit.com/citi.com",
  },
  { 
    name: "Goldman Sachs", 
    country: "USA",
    logo: "https://logo.clearbit.com/goldmansachs.com"
  },
  { 
    name: "Morgan Stanley", 
    country: "USA",
    logo: "https://logo.clearbit.com/morganstanley.com"
  },
  { 
    name: "US Bank", 
    country: "USA",
    logo: usBank
  },
  { 
    name: "PNC Bank", 
    country: "USA",
    logo: pnc
  },
  { 
    name: "Capital One", 
    country: "USA",
    logo: "https://logo.clearbit.com/capitalone.com"
  },
  { 
    name: "TD Bank", 
    country: "USA",
    logo: "https://logo.clearbit.com/td.com"
  },
  { 
    name: "BB&T (Truist)", 
    country: "USA",
    logo: "https://logo.clearbit.com/truist.com"
  },
  { 
    name: "SunTrust Bank (Truist)", 
    country: "USA",
    logo: "https://logo.clearbit.com/truist.com"
  },
  { 
    name: "HSBC Bank USA", 
    country: "USA",
    logo: "https://logo.clearbit.com/hsbc.com"
  },
  { 
    name: "Fifth Third Bank", 
    country: "USA",
    logo: "https://logo.clearbit.com/53.com"
  },
  { 
    name: "Regions Bank", 
    country: "USA",
    logo: "https://logo.clearbit.com/regions.com"
  },
  { 
    name: "KeyBank", 
    country: "USA",
    logo: "https://logo.clearbit.com/key.com"
  },
  { 
    name: "Citizens Bank", 
    country: "USA",
    logo: "https://logo.clearbit.com/citizensbank.com"
  },
  { 
    name: "M&T Bank", 
    country: "USA",
    logo: "https://logo.clearbit.com/mtb.com"
  },
  { 
    name: "Synchrony Bank", 
    country: "USA",
    logo: "https://logo.clearbit.com/synchrony.com"
  },
  { 
    name: "Ally Bank", 
    country: "USA",
    logo: "https://logo.clearbit.com/ally.com"
  },

  // Foreign Banks
  { 
    name: "Barclays", 
    country: "UK",
    logo: "https://logo.clearbit.com/barclays.com"
  },
  { 
    name: "Santander", 
    country: "Spain",
    logo: santan
  },
  { 
    name: "Deutsche Bank", 
    country: "Germany",
    logo: "https://logo.clearbit.com/db.com"
  },
  { 
    name: "ING Bank", 
    country: "Netherlands",
    logo: "https://logo.clearbit.com/ing.com"
  },
  { 
    name: "Standard Chartered", 
    country: "UK",
    logo: standard
  },
  { 
    name: "Royal Bank of Canada", 
    country: "Canada",
    logo: "https://logo.clearbit.com/rbc.com"
  },
  { 
    name: "Scotiabank", 
    country: "Canada",
    logo: scotia
  },
];



  return (
  <>
    {loading && <Spinner message={'Verifying recipient details'} message2={'Please wiat while we securely verify the account details'}/>}
    <div className='transfer-cont'>
     <div className='transfer-title'><ArrowLeft size={'17px'} onClick={() => navigate('/dashboard')}/> <p>Start transfer</p></div>
      {/*PAYING FROM*/}
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
      
      {/*PAYING TO*/}
      <div className='paying-to'>
        <p className='Titless'>Enter recivers account number</p>
        <div>
          <input inputMode='numeric' placeholder='**********'
          onChange={(e) => setAccountNumber(e.target.value)}
          value={accountNumber}></input>
        </div>
      </div>


      <div className='paying-too'>
        <p className='Titless'>Enter recipient name</p>
        <div>
          <input placeholder='recipient name'
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}></input>
        </div>
      </div>

       {/*SELECT BENEFICIARY*/}
      <div className='select-beneficiary'>
        <p className='Titless'>Select beneficiary</p>
        <div className='beneficiaries'>
          <div className='ben-div'>
            <input placeholder='Search account' onChange={(e) => setSearchBeneficiary(e.target.value)}></input>
            <button>Recent</button>
          </div>
         <div className='beneficiary-det-cont'>
            {beneficiaries.filter((holder) => {
            const searchTerm = searchBeneficiary.toLowerCase();
            return holder.name.toLowerCase().includes(searchTerm) || holder.bank.toLowerCase().includes(searchTerm) || holder.accountNumber.includes(searchTerm);
          }).map((holder, index) => (
            <div className='beneficiary-det' key={index} onClick={() => handleBeneficiary(holder)}>
              {holder.logo ? <img className='ban-logo' src={holder.logo}/> : <span className='initial'>{getInitials(holder.name)}</span>}
              <div>
                <p>{holder.name}</p>
                <p>{holder.bank} • {holder.accountNumber}</p>
              </div>
            </div>
          ))}
         </div>
        </div>
      </div>

      {/*SELECT BANK*/}
      <div className='select-bank'>
        <p className='Titless'>Select bank to complete transfer</p>
        <div className='bank-container'>
          <input placeholder='search banks' onChange={(e) => setSearchBank(e.target.value)}></input>
          <div className='unknownT'>
             { banks.filter((bank) => searchBank !== '' && bank.name.toLowerCase().includes(searchBank.toLowerCase())).map((bank) => (
            <div className='bank' onClick={() => {handleManualDetails(accountNumber, recipientName, bank.name, bank.logo )}}>
              <div>
                <Landmark className='bnk-logo' size={'20px'}/>
                <span>{bank.name}</span>
              </div>
              <ChevronRight size={'20px'}/>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div></>
  )
}

export default StartTransfer
