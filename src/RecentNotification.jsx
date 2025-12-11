
import { Bell } from "lucide-react";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
function RecentNotifications() {
  const {getNotifications , notifications} = useAuth()
  useEffect(() => {
    getNotifications()
  } , [])
  return (
    <div className="notifications-container">
  <h3 className="notifications-title">Notifications</h3>
  <ul className="notifications-list">
    {notifications.map((note) => (
      <li
        key={note.id}
        className={`notification-item ${
          note.status === "Incoming"
            ? "success"
            : "success"
        }`}
      >
        <div className="notification-icon">
          <Bell size={20} />
        </div>
        <div className="notification-content">
          <p className="notification-message">
            {note.type === "transaction"
              ? `${note.status === "Incoming" ? "Incoming" : "Withdrawal"} transfer of $${note.amount}`
              : note.message}
          </p>
          <span className="notification-time">
            {note.createdAt?.toDate
              ? note.createdAt.toDate().toLocaleString()
              : "just now"}
          </span>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}

export default RecentNotifications;
