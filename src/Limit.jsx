// AccountLimits.jsx
import React from "react";
import { ArrowLeft } from "lucide-react"; // assuming you have lucide-react
import LimitsShimmer from "./Shimmer";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";
export default function AccountLimits() {
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [])
  const {user} = useAuth()
  const ACCOUNT_LIMITS = {
  1: {
    singleCredit: 5000,
    dailyCredit: 20000,
    singleDebit: 5000,
    dailyDebit: 20000,
  },
  2: {
    singleCredit: 50000,
    dailyCredit: 100000,
    singleDebit: 50000,
    dailyDebit: 100000,
  },
  3: {
    singleCredit: 500000,
    dailyCredit: 1000000,
    singleDebit: 500000,
    dailyDebit: 1000000,
  },
  }
const kycLevel = user?.kycLevel ?? 2;
const limits = ACCOUNT_LIMITS[kycLevel];
const formatUSD = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  if (loading === true) return <LimitsShimmer/>
  
  return (

    <div className="limits-container">
      {/* Header */}
      <div className="limits-header">
        <ArrowLeft size={17} />
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
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${(kycLevel - 1) * 50}%` }}
          />
        </div>

        <div className="progress-steps">
          {[1, 2, 3].map((level) => (
            <div
              key={level}
              className={`progress-step ${
                kycLevel >= level ? "completed" : ""
              } ${kycLevel === level ? "active" : ""}`}
            >
              <div className="step-circle">
                {kycLevel > level ? "✓" : `${level}`}
              </div>
            </div>
          ))}
        </div>
      </div>


        {/* Upgraded Limits */}
        <div className="upgraded-section">
  <h3>Upgraded Account Limits</h3>

  <div className="limits-grid">
    <div className="limit-box">
      <p>Single Credit Limit</p>
      <strong>{formatUSD(limits.singleCredit)}</strong>

      <p>Daily Credit Limit</p>
      <strong>{formatUSD(limits.dailyCredit)}</strong>
    </div>

    <div className="limit-box">
      <p>Single Debit Limit</p>
      <strong>{formatUSD(limits.singleDebit)}</strong>

      <p>Daily Debit Limit</p>
      <strong>{formatUSD(limits.dailyDebit)}</strong>
    </div>
  </div>
</div>

      </div>

      {/* Upgrade Button */}
      <button
  disabled={kycLevel === 3}
  className={`upgrade-btn ${kycLevel === 3 ? "disable" : ""}`}
>
  {kycLevel === 3 ? "Maximum Level Reached" : "Upgrade Limits"}
</button>

    </div>
  );
}