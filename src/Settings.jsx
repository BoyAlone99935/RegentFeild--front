import { ArrowLeft , ArrowRight, Bell, BellElectric, ChevronRight, EyeClosed, Lock, ShieldAlert, Trash2Icon } from "lucide-react"
import { FaMobile } from "react-icons/fa"
import './styles/Settings.css'


function Settings() {
  return (
    <div className='settings-container'>
      <div>
        <ArrowLeft/>
        <span>Settings</span>
        <div></div>
      </div>


      <div>
        <span>Security & Privacy</span>
        <div>
          <Lock/>
          <span>Change Password</span>
          <ChevronRight/>
        </div>

        <div>
          <Lock/>
          <span>Reset User Pin</span>
          <ChevronRight/>
        </div>


        <div>
          <EyeClosed/>
          <span>Hide Balance</span>
          <ChevronRight/>
        </div>
      </div>
    
      <div>
        <span>App & Device</span>
        <div>
          <ShieldAlert/>
          <span>Consent Request</span>
          <ChevronRight/>
        </div>

        <div>
          <FaMobile/>
          <span>Device Management</span>
          <ChevronRight/>
        </div>


        <div>
          <Bell/>
          <span>Notification Prefrence</span>
          <ChevronRight/>
        </div>

      </div>
       <div>
        <span>Others</span>
        <div>
          <Trash2Icon/>
          <span>Delete Account</span>
          <ChevronRight/>
        </div>
      </div>
    </div>
  )
}

export default Settings
