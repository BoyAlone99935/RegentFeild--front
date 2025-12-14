import React, { useState } from 'react'
import pf from '../src/assets/img2.jpg'
import './styles/Dashboard.css'
import { FaAppStore, FaCreditCard, FaHeadset, FaRegBell, FaHome } from 'react-icons/fa'
import DashHome from './DashHome'
import Notification from './Notification'
import Service from './Service'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import Spinner from './Spinner'
function Dashboard() {
  const [activeTab, setActiveTab] = useState('home')
  const navigate = useNavigate()
  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <DashHome setTabb = {setActiveTab}/>
      case 'card': return <Card />
      case 'service': return <Service setTabb = {setActiveTab}/>
      case 'notification': return <Notification />
      default: return <DashHome />
    }
  }
  const {user} = useAuth()
  console.log(user)

  if (!user) return <Spinner />;
  return (
    <>
    <div className='mobile-wrapper'>
    <div className='dashboard-container'>

      {/* TOP BAR */}
      <div className='top'>
        <div className='fix'>
          <div className='user-info'>
            <img src={user.profilePicture} alt="profile" onClick={() => navigate('/profileDetails')} style={{cursor : 'pointer'}}/>
            <span>Level 3</span>
          </div>
          <FaHeadset className="support-icon" onClick={() => navigate('/support')} style={{cursor : 'pointer'}}/>
        </div>
      </div>

      {/* MAIN VIEW */}
      <div className="screen-wrapper">
        {renderScreen()}
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="bottom-nav">
        <button 
          className={activeTab === 'home' ? 'tab active' : 'tab'} 
          onClick={() => setActiveTab('home')}
        >
          <FaHome />
          <span>Home</span>
        </button>

        <button 
          className={activeTab === 'card' ? 'tab active' : 'tab'} 
          onClick={() => setActiveTab('card')}
        >
          <FaCreditCard />
          <span>Cards</span>
        </button>

        <button 
          className={activeTab === 'service' ? 'tab active' : 'tab'} 
          onClick={() => setActiveTab('service')}
        >
          <FaAppStore />
          <span>Services</span>
        </button>

        <button 
          className={activeTab === 'notification' ? 'tab active' : 'tab'} 
          onClick={() => setActiveTab('notification')}
        >
          <FaRegBell/>
          <span>Alerts</span>
        </button>
      </div>

    </div>
    </div></>
  )
}

export default Dashboard
