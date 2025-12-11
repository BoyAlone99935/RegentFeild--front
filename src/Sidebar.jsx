
import React, { useState } from "react";
import {
  Bell,
  LogOut,
  Settings,
  HelpCircle,
  User,
  Sun,
  Moon,
  Lock,
  LucidePanelRight,
  LucidePanelLeft,
  LucideGrid,
} from "lucide-react";
import { useAuth } from "./AuthContext"; 
import './styles/Sidebar.css'
const Sidebar = ({setActivePage , activePage}) => {
  const {dark , setDark  , isCollapsed , setIsCollapsed } = useAuth()

  const menuItems = [
   { icon: LucideGrid, label: "Dashboard", id: "Dashboard", type: "primary" },
  { icon: Bell, label: "Notifications", id: "notification", type: "warning" },
  { icon: LogOut, label: "LogOut", id: "logOut", type: "danger" },
  { icon: Settings, label: "Settings", id: "settings", type: "neutral" },
  { icon: HelpCircle, label: "Support", id: "Support", type: "info" },
  { icon: User, label: "Account Details", id: "AccountDetails", type: "success" },
  {
    icon: dark ? Moon : Sun,
    label: dark ? "Dark Mode" : "Light Mode",
    onClick: () => setDark(!dark),
    type: "neutral",
  },
  { icon: Lock, label: "Lock", id: "lock", type: "danger" },
  ];
   
  return (
    <div style={dark ? {backgroundColor : '#ffff'} : null} className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="toggle-btn"
      >
        {isCollapsed ? <LucidePanelRight style={!dark ? {color : 'white'} : {color : 'black'}}/> : <LucidePanelLeft style={!dark ? {color : 'white'} : {color : 'black'}}/>}
      </button>

      {/* Menu */}
      <nav className="menu">
        {menuItems.map((item, index) => {
        const Icon = item.icon; // assign component
        return (
          <div
            key={index}
            onClick={item.onClick ? item.onClick : () => setActivePage(item.id)}
            className={`menu-item ${activePage === item.id ? "active" : ""}`}
          >
            <div className={`menu-icon ${item.type}`}>
              <Icon size={20} />
            </div>
            {!isCollapsed && <span className="label">{item.label}</span>}
          </div>
        );
      })}
      </nav>
    </div>
  );
};

export default Sidebar;