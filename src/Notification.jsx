import React from 'react'
import { useAuth } from './AuthContext'
import { ArrowLeft, X } from 'lucide-react';
import './styles/Notification.css'
import { useNavigate } from 'react-router-dom';
function Notification() {
  const navigate = useNavigate()
  const {notifications , user} = useAuth()
  console.log(notifications)
  function getFirstLetter(name) {
  return name.split(' ')[0][0];
  }

  function truncateString(str, length, symbol = '...') {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + symbol;
}
  return (
    <div>
    {
      notifications.length ?  <div className='notification-container'>
       {
        notifications.map((notification) => (
          <div key={notification._id} className='notification' onClick={() => navigate('/notification-details' , {state : {data : notification}})}>
           <div className='initialss'>
            <span>{getFirstLetter(user.name).toUpperCase()}</span>
           </div>
           <div className='msg'>
             <span className='msg-type'>{notification.type === 'Debit' && 'Debit Alert'}</span>
             <span className='msg-msg'>{truncateString(notification.message , 65 , '...')}</span>
           </div>
          </div>
        ))
      }
     </div> : <p style={{textAlign : 'center'}}>No notifications yet</p>
    }
    </div>
  )
}

export default Notification
