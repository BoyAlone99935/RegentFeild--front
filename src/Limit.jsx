// AccountLimits.jsx
import React from "react";
import { ArrowLeft } from "lucide-react"; // assuming you have lucide-react

export default function AccountLimits() {
  return (
    <div className="limits-container">
      {/* Header */}
      <div className="limits-header">
        <ArrowLeft size={24} />
        <h1>Account Limits</h1>
      </div>

      {/* Main Card */}
      <div className="limits-card">
        <div className="limits-card-header">
          <span>Account Level</span>
          <a href="#" className="view-limits">View Limits →</a>
        </div>

        {/* Progress Bar */}
        <div className="kyc-progress">
          <div className="progress-check">✓</div>
          <div className="progress-line"></div>
          <div className="progress-labels">
            <span className="active">Lvl 1</span>
            <span>Lvl 2</span>
            <span>Lvl 3</span>
          </div>
        </div>

        {/* Upgraded Limits */}
        <div className="upgraded-section">
          <h3>Upgraded Account Limits</h3>
          <div className="limits-grid">
            <div className="limit-box">
              <p>Single Credit Limit:</p>
              <strong>₦50,000.00</strong>
              <p>Daily Credit Limit:</p>
              <strong>₦300,000.00</strong>
            </div>
            <div className="limit-box">
              <p>Single Debit:</p>
              <strong>₦50,000.00</strong>
              <p>Daily Debit Limit:</p>
              <strong>₦300,000.00</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Button */}
      <button className="upgrade-btn">Upgrade Limits</button>
    </div>
  );
}