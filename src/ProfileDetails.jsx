import React from 'react'
import './styles/Me.css'
import pf from '../src/assets/img2.jpg'
import { Bell, ChevronRight, Edit, HelpCircle, LogOut, Sliders } from 'lucide-react'
import { FaGreaterThan } from 'react-icons/fa'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'
function ProfileDetails() {
  const {user , logOut} = useAuth()
  const navigate = useNavigate()
  return (
    <div className='me-container' >
      <p className='Title'>Profile Details</p>
      <div className='pic'>
        <img src={user.profilePicture}/>
        <span>{user.name}</span>
      </div>

      <div style={{marginTop : '2rem'}}>
        <p className='Titless'>Personal Information</p>
        <div className='personal-Info-cont'>
         <div className='personal-item'>
          <span className='to'>Phone Number</span>
          <span className='ans'>{user.phone}</span>
         </div>
         <div className='personal-item'>
          <span className='to'>Email</span>
          <span className='ans'>{user.email}</span>
         </div>
         <div className='personal-item'>
          <span className='to'>Address</span>
          <div className='verify'>
            <span className='ans' style={{width : '240px'}}>{user.address}</span>
            <span className='Verified'>Verified</span>
          </div>
         </div>
         <button><Edit size={'13px'}/> Edit</button>
        </div> 
      </div>

      
     <div style={{marginTop : '3rem'}}>
       <p className='Titless'>Actions</p>
        <div className='action-cont'>
        <div className='action'>
          <div>
            <Bell size={'15px'}/>
            <span>Notifications</span>
          </div>
          <ChevronRight size={'15px'}  color='rgb(236, 167, 5)'/>
        </div>
         <div className='action' onClick={() => navigate('/support')}>
          <div>
            <HelpCircle size={'15px'}/>
            <span>Support</span>
          </div>
          <ChevronRight size={'15px'}  color='rgb(236, 167, 5)'/>
        </div>
         <div className='action'>
          <div onClick={() => navigate('/settings')}>
            <Sliders size={'15px'}/>
            <span>Settings</span>
          </div>
          <ChevronRight size={'15px'}  color='rgb(236, 167, 5)'/>
        </div>
         <div className='action' onClick={() => {
          logOut()
          navigate('/login')
         }}>
          <div>
            <LogOut size={'15px'} color='rgba(240, 13, 13, 1)'/>
            <span>Log Out</span>
          </div>
          <ChevronRight size={'15px'} color='rgba(240, 13, 13, 1)'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileDetails
