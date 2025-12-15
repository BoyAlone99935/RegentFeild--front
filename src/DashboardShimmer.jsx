import React from "react";


export default function DashboardShimmer() {
  return (
    <div className="dash-shimmer">
      {/* Header */}
      <div className="shimmer shimmer-header" />

      {/* Balance Card */}
      <div className="shimmer shimmer-balance" />

      {/* Quick Actions */}
      <div className="shimmer-row">
        <div className="shimmer shimmer-action" />
        <div className="shimmer shimmer-action" />
        <div className="shimmer shimmer-action" />
        <div className="shimmer shimmer-action" />
      </div>

      {/* Stats */}
      <div className="shimmer-row">
        <div className="shimmer shimmer-stat" />
        <div className="shimmer shimmer-stat" />
      </div>

      {/* Transactions */}
      <div className="shimmer shimmer-title" />
      <div className="shimmer-list">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="shimmer shimmer-transaction" />
        ))}
      </div>
    </div>
  );
}
