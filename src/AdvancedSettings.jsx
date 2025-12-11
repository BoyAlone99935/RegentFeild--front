import React, { useState } from "react";
import "./styles/Advanced.css";

function AdvancedSettings() {
  const [experimental, setExperimental] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [betaUpdates, setBetaUpdates] = useState(false);
  const [backgroundSync, setBackgroundSync] = useState(true);

  return (
    <div className="advanced-settings">
      <h2 className="section-title">Advanced Settings</h2>

      <div className="setting-card">
        <div className="setting-info">
          <h4>Enable Experimental Features</h4>
          <p>Test upcoming features before they are officially released.</p>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={experimental}
            onChange={() => setExperimental(!experimental)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-card">
        <div className="setting-info">
          <h4>Data Saver Mode</h4>
          <p>Reduce background activity and animations to save data.</p>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={dataSaver}
            onChange={() => setDataSaver(!dataSaver)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-card">
        <div className="setting-info">
          <h4>Allow Analytics</h4>
          <p>Help us improve by sending anonymous usage data.</p>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={analytics}
            onChange={() => setAnalytics(!analytics)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-card">
        <div className="setting-info">
          <h4>Enable Beta Updates</h4>
          <p>Get early access to new releases before they go public.</p>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={betaUpdates}
            onChange={() => setBetaUpdates(!betaUpdates)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-card">
        <div className="setting-info">
          <h4>Background Sync</h4>
          <p>Allow app to sync data when running in the background.</p>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={backgroundSync}
            onChange={() => setBackgroundSync(!backgroundSync)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default AdvancedSettings;
