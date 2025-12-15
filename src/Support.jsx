import React, { useEffect } from 'react';
import './styles/Support.css';
import { Mail, MessageSquare, MessageSquareReply, MessageSquareText, Send } from 'lucide-react';

function Support() {
  useEffect(() => {
    // Load the Tawk.to script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/693f550ae13f1e197a0d9433/1jcfm8ce2';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChatClick = () => {
    // Check if Tawk_API is loaded
    if (window.Tawk_API && window.Tawk_API.maximize) {
      // Trigger the Tawk.to chat widget
      window.Tawk_API.maximize();
    } else {
      console.log('Tawk_API is not loaded yet');
    }
  };


  useEffect(() => {
  // Load the Tawk.to script
  const script = document.createElement('script');
  script.src = 'https://embed.tawk.to/693f550ae13f1e197a0d9433/1jcfm8ce2';
  script.async = true;
  document.body.appendChild(script);

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function() {
    // Hide the Tawk.to widget
    window.Tawk_API.hideWidget();
    // Add an event listener to hide the icon when the chat is closed
    window.Tawk_API.onChatEnded = function() {
      window.Tawk_API.hideWidget();
    };
  };
}, []);

  return (
    <div className='support-container'>
      <p className='Title'>Help & support</p>
      <div className='chat-cont'>
        <p className='Titless'>chat</p>
        <div className='chat'>
          <span className='timeFrame' style={{marginBottom : '0.7rem'}}>Average response time: 1min</span>
          <div className='per' onClick={handleChatClick} style={{ cursor: 'pointer' }}>
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
            <span>support@regentFeild.com</span>
            <button><Mail size={'17'}/>Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
