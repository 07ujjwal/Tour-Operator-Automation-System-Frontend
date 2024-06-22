// UserProfile.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import useAuthStore from "../../store/authStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  const { user, clearAuth } = useAuthStore.getState(); // Get user and clearAuth function from store

  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    clearAuth();
  };

  return (
    <div className="user-profile">
      <div className="user-info" onClick={toggleDropdown}>
        <img src={user?.photo} alt="User" className="user-photo" />
        <span className="user-name">{user?.name}</span>
        <FontAwesomeIcon
          icon={dropdownOpen ? faCaretUp : faCaretDown}
          className="caret-icon"
        />
      </div>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li onClick={toggleDropdown}>
            <Link to="/profile">View Profile</Link>
          </li>
          <li onClick={handleLogout}>
            <Link to="/logout">Logout</Link>
          </li>
          {user.userType === "admin" && (
            <li onClick={handleLogout}>
              <Link to="/admin">admin</Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
