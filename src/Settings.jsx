import {
  ArrowLeft,
  ChevronRight,
  EyeClosed,
  Lock,
  ShieldAlert,
  Trash2Icon,
  Bell,
} from "lucide-react";
import { FaMobile } from "react-icons/fa";
import "./styles/Settings.css";
import { useAuth } from "./AuthContext";

function Settings() {
  const { on, setOn } = useAuth();

  const toggle = () => {
    setOn((prev) => !prev);
  };

  return (
    <div className="mobile-wrapper">
      <div className="settings-container">
        <div className="settings-header">
          <ArrowLeft size={17} />
          <span>Settings</span>
          <div></div>
        </div>

        <div className="settings-section">
          <span className="others">Security & Privacy</span>

          <div className="settings-item">
            <div className="setting">
              <Lock size={15} />
              <span>Change Password</span>
            </div>
            <ChevronRight size={15} />
          </div>

          <div className="settings-item">
            <div className="setting">
              <Lock size={15} />
              <span>Reset User Pin</span>
            </div>
            <ChevronRight size={15} />
          </div>

          <div className="settings-item">
            <div className="setting">
              <EyeClosed size={15} />
              <span>Hide Balance</span>
            </div>

            <button
              type="button"
              onClick={toggle}
              className={`toggle ${on ? "active" : ""}`}
              aria-pressed={on}
            >
              <span className="knob" />
            </button>
          </div>
        </div>

        <div className="settings-section">
          <span className="others">App & Device</span>

          <div className="settings-item">
            <div className="setting">
              <ShieldAlert size={15} />
              <span>Consent Request</span>
            </div>
            <ChevronRight size={15} />
          </div>

          <div className="settings-item">
            <div className="setting">
              <FaMobile size={15} />
              <span>Device Management</span>
            </div>
            <ChevronRight size={15} />
          </div>

          <div className="settings-item">
            <div className="setting">
              <Bell size={15} />
              <span>Notification Preference</span>
            </div>
            <ChevronRight size={15} />
          </div>
        </div>

        <div className="settings-section">
          <span className="others">Others</span>

          <div className="settings-item">
            <div className="setting">
              <Trash2Icon color="red" size={15} />
              <span style={{ color: "red" }}>Delete Account</span>
            </div>
            <ChevronRight color="red" size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
