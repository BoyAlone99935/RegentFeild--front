import React from 'react'
import './styles/Support.css'
import { Mail, MessageSquare, MessageSquareReply, MessageSquareText, Send } from 'lucide-react'
function Support() {
  return (
    <div className='support-container'>
      <p className='Title'>Help & support</p>

      <div className='chat-cont'>
        <p className='Titless'>chat</p>
       <div className='chat'>
        <span className='timeFrame' style={{marginBottom : '0.7rem'}}>Average response time: 1min</span>
        <div className='per'>
          <MessageSquare color='yellow'/>
          <div>
            <span>Support chat</span>
            <p>start a conversation on live chat</p>
          </div>
        </div>
         <div className='per'>
          <MessageSquareText color='green'/>
          <div>
            <span>whatsapp</span>
            <p>start a conversation on whatsapp</p>
          </div>
        </div>
       </div>
      </div>

     <div className='email-cont'>
      <p className='Titless'>email</p>
      <div className='email'>
        <span className='timeFrame'>Average response time: 12hrs</span>
        <div>
         <span>support@regentFeild.com</span> <button><Mail size={'17'}/>Email</button>
        </div>
      </div>
     </div>

    </div>
  )
}

export default Support
