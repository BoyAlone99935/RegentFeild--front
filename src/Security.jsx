import React from 'react'
import ResetPassword from './ResetPassword'
import HideBalance from './Hidebalance'
import TwoFac from './TwoFac'
import HideUid from './HideUid'
import DeleteAccount from './DeleteAccount'
function Security() {
  return (
    <div>
      <div>
       <ResetPassword/>
       <HideBalance/>
       <TwoFac/>
       <HideUid/>
       <DeleteAccount/>
      </div>
    </div>
  )
}

export default Security
