import React from "react";
import {
  User,
  IdCard,
  Mail,
  Phone,
  Globe,
  Calendar,
  Clock,
} from "lucide-react";
import './styles/AccountDet.css'
import { useAuth } from "./AuthContext";
import { useEffect } from "react";
export default function AccountDetails() {
  const {getUserDetails , userDetails , user} = useAuth()
  useEffect(() => {
    getUserDetails()
  })
  return (
    <div className="user-details-card">
      <div className="detail-row">
        <div className="icon-box">
          <IdCard size={20} />
        </div>
        <div className="detail-content">
          <span className="label">User ID</span>
          <span className="value code">{user.uid}</span>
        </div>
      </div>

      <div className="detail-row">
        <div className="icon-box">
          <User size={20} />
        </div>
        <div className="detail-content">
          <span className="label">First Name</span>
          <span className="value">{userDetails.firstName}</span>
        </div>
      </div>

      <div className="detail-row">
        <div className="icon-box">
          <User size={20} />
        </div>
        <div className="detail-content">
          <span className="label">Last Name</span>
          <span className="value">{userDetails.lastName}</span>
        </div>
      </div>

      <div className="detail-row">
        <div className="icon-box">
          <Mail size={20} />
        </div>
        <div className="detail-content">
          <span className="label">Email</span>
          <span className="value highlight">{userDetails.email}</span>
        </div>
      </div>

      <div className="detail-row">
        <div className="icon-box">
          <Clock size={20} />
        </div>
        <div className="detail-content">
          <span className="label">Age</span>
          <span className="value">{userDetails.age}</span>
        </div>
      </div>

      <div className="detail-row">
        <div className="icon-box">
          <Calendar size={20} />
        </div>
        <div className="detail-content">
          <span className="label">Birthday</span>
          <span className="value">{userDetails.birthdate}</span>
        </div>
      </div>

      <div className="detail-row">
        <div className="icon-box">
          <Phone size={20} />
        </div>
        <div className="detail-content">
          <span className="label">Phone</span>
          <span className="value">{userDetails.phone}</span>
        </div>
      </div>

      <div className="detail-row">
        <div className="icon-box">
          <Globe size={20} />
        </div>
        <div className="detail-content">
          <span className="label">Residence</span>
          <span className="value">{userDetails?.selectedCountry?.name}</span>
        </div>
      </div>
    </div>
  );
}
