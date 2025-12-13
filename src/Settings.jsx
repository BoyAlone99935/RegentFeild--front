import { ArrowLeft, ChevronRight, EyeClosed, Lock, ShieldAlert, Trash2Icon, Bell } from "lucide-react";
import { FaMobile } from "react-icons/fa";
import './styles/Settings.css';
import { useState } from "react";
function Settings() {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
      setChecked(prev => !prev);
      onToggle?.(!checked);
    };
  return (
    <div className="mobile-wrapper">
      <div className='settings-container'>
        <div className="settings-header">
          <ArrowLeft size={17}/>
          <span>Settings</span>
          <div></div>
        </div>
        <div className="settings-section">
          <span className="others">Security & Privacy</span>
          <div className="settings-item">
            <div className="setting">
              <Lock className="arrowLeft" size={15}/>
              <span>Change Password</span>
            </div>
            <ChevronRight className="arrowLeft" size={15}/>
          </div>
          <div className="settings-item">
            <div className="setting">
              <Lock className="arrowLeft" size={15}/>
              <span>Reset User Pin</span>
            </div>
            <ChevronRight className="arrowLeft" size={15}/>
          </div>
          <div className="settings-item">
            <div className="setting">
              <EyeClosed className="arrowLeft" size={15}/>
              <span>Hide Balance</span>
            </div>
               <div
                className={`toggle ${checked ? "on" : ""}`}
                onClick={handleToggle}
              >
                <div className="toggle-circle" />
              </div>
          </div>
        </div>
        <div className="settings-section">
          <span className="others">App & Device</span>
          <div className="settings-item">
            <div className="setting">
              <ShieldAlert className="arrowLeft" size={15}/>
              <span>Consent Request</span>
            </div>
            <ChevronRight className="arrowLeft" size={15}/>
          </div>
          <div className="settings-item">
            <div className="setting">
              <FaMobile className="arrowLeft" size={15}/>
              <span>Device Management</span>
            </div>
            <ChevronRight className="arrowLeft" size={15}/>
          </div>
          <div className="settings-item">
            <div className="setting">
              <Bell className="arrowLeft" size={15}/>
              <span>Notification Preference</span>
            </div>
            <ChevronRight className="arrowLeft" size={15}/>
          </div>
        </div>
        <div className="settings-section">
          <span className="others">Others</span>
          <div className="settings-item">
            <div className="setting">
              <Trash2Icon color="red"  className="arrowLeft" size={15}/>
              <span style={{color : 'red'}}>Delete Account</span>
            </div>
            <ChevronRight color="red" size={15}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
