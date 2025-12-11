import React, { useState } from "react";
import GeneralSettings from "./GeneralSettings";
import Security from "./Security";
import NotificationSettings from "./NotificationSettings";
import AdvancedSettings from "./AdvancedSettings";
import About from "./About";
import { Shield, Bell, Sliders, Info, Settings as SettingsIcon } from "lucide-react";
import "./styles/Settings.css";

function Settings() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="settings-wrapper">
      {/* General */}
      <div className="settings-card">
        <div
          className="settings-header"
          onClick={() => toggleSection("general")}
        >
          <div className="header-left">
             <SettingsIcon className="seticon" size={20} />
            <h2>General</h2>
          </div>
          <span className="toggle">
            {openSection === "general" ? "−" : "+"}
          </span>
        </div>
        {openSection === "general" && (
          <div className="settings-body">
            <GeneralSettings />
          </div>
        )}
      </div>

      {/* Security */}
      <div className="settings-card">
        <div
          className="settings-header"
          onClick={() => toggleSection("security")}
        >
          <div className="header-left">
            <span className="icon security">
              <Shield size={20} />
            </span>
            <h2>Security & Privacy</h2>
          </div>
          <span className="toggle">
            {openSection === "security" ? "−" : "+"}
          </span>
        </div>
        {openSection === "security" && (
          <div className="settings-body">
            <Security />
          </div>
        )}
      </div>

      {/* Notifications */}
      <div className="settings-card">
        <div
          className="settings-header"
          onClick={() => toggleSection("notifications")}
        >
          <div className="header-left">
            <span className="icon notifications">
              <Bell size={20} />
            </span>
            <h2>Notifications</h2>
          </div>
          <span className="toggle">
            {openSection === "notifications" ? "−" : "+"}
          </span>
        </div>
        {openSection === "notifications" && (
          <div className="settings-body">
           <NotificationSettings/>
          </div>
        )}
      </div>

      {/* Advanced */}
      <div className="settings-card">
        <div
          className="settings-header"
          onClick={() => toggleSection("advanced")}
        >
          <div className="header-left">
            <span className="icon advanced">
              <Sliders size={20} />
            </span>
            <h2>Advanced</h2>
          </div>
          <span className="toggle">
            {openSection === "advanced" ? "−" : "+"}
          </span>
        </div>
        {openSection === "advanced" && (
          <div className="settings-body">
            <AdvancedSettings />
          </div>
        )}
      </div>

      {/* About */}
      <div className="settings-card">
        <div
          className="settings-header"
          onClick={() => toggleSection("about")}
        >
          <div className="header-left">
            <span className="icon about">
              <Info size={20} />
            </span>
            <h2>About</h2>
          </div>
          <span className="toggle">
            {openSection === "about" ? "−" : "+"}
          </span>
        </div>
        {openSection === "about" && (
          <div className="settings-body">
            <About />
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
