import React from 'react'
import { useLocation } from 'react-router-dom'
function NotificationDet() {
  const location = useLocation()
  const detail = location.state.data
  console.log(detail)
  return (
    <div className='message-detail-container'>
      <div className='message-container'>
        {<span className='det-type'>{detail.type === 'Debit' && 'Debit Alert'}</span>}
        <span className='msg'>{detail.message}</span>
        <span className='msg'>{detail._id}</span>
      </div>
    </div>
  )
}

export default NotificationDet
