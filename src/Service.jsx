import React from 'react'
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
  WalletCardsIcon,
  LogOut,
  Code2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { useNavigate } from 'react-router-dom'
import { FaBookOpen, FaMobileAlt } from 'react-icons/fa'
import { Search } from "lucide-react";
function Service({setTabb}) {
  const navigate = useNavigate()
  return (
    <div>
      

      <div className="search-wrapper">
        <Search className="search-icon" size={18} />
        <input
          className="list-srch"
          placeholder="Search services"
        />
      </div>



      <div className='service-list-cont'>
        <span>Send and recive</span>
        <div className='service-list'>
          <div className='service-item' onClick={() => navigate('/start-transfer')}>
            <ArrowLeftRight size={13} />
            <p>Transfer</p>
          </div>

          <div className='service-item' onClick={() => setTabb("card")}>
            <CreditCard size={13} />
            <p>Card</p>
          </div>

          <div className='service-item'>
            <Wifi size={13} />
            <p>Network</p>
          </div>

          <div className='service-item'>
            <Loader2 size={13} />
            <p>Recurring</p>
          </div>
        </div>


        <span>Bill and charges</span>
         <div className='service-list'>
           <div className='service-item'>
              <Monitor size={13} />
              <p>TV</p>
            </div>
            <div className='service-item'>
              <FaMobileAlt size={13} />
              <p>Mobile</p>
            </div>
            <div className='service-item'>
              <FaBookOpen size={13} />
              <p>Educative</p>
            </div>
            <div className='service-item'>
              <Code2 size={13} />
              <p>APIs</p>
            </div>
            <div className='service-item'>
              <ShieldCheck size={13} />
              <p>Insurance</p>
            </div>
            <div className='service-item'>
              <TrendingUp size={13} />
              <p>Investments</p>
            </div>
        </div>

        <span>Savings</span>
        <div className='service-list'>
          <div className='service-item'>
            <WalletCardsIcon size={13} />
            <p>Savings</p>
          </div>
        </div>
        <span>Lifestyle</span>
        <div className='service-list'>
          <div className='service-item'>
            <WalletCardsIcon size={13} />
            <p>Savings</p>
          </div>
        </div>
        
        <span>Account and settings</span>
        <div className='service-list'>
         <div className='service-item' onClick={() => navigate('/settings')}>
            <Sliders size={13} />
            <p>Settings</p>
          </div>

          <div className='service-item' onClick={() => navigate('/limit')}>
            <Gauge size={13} />
            <p>Limit</p>
          </div>

          <div className='service-item'>
            <File size={13} />
            <p>Statement</p>
          </div>

          <div className='service-item'>
            <LogOut size={13} color='red'/>
            <p style={{color: 'red'}}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
