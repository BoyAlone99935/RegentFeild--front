import React from 'react'
import './styles/Ready.css'
function Ready() {
  return (
    <div className="ready">
  {/* Blob background */}
  <div className="newblob"></div>

  {/* Content */}
  <div className="ready-content">
    <p className="ready-text-header">
      Ready to take control of your finances?
    </p>
    <p className="ready-text">
      Sign up today and experience the future of Financial services. 
      Your secure, efficient, and user-friendly banking solution is just a click away.
    </p>
    <button className="ready-btn">Register</button>
  </div>
</div>
  )
}

export default Ready
