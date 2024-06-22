import React from "react";
import "./Header.css";
import UserProfile from "../userProfile/UserProfile";
import useAuthStore from "../../store/authStore";

const Header = () => {
  const { user } = useAuthStore.getState();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">TravelZone</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#tours">Tours</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        {user && (
          <div className="profile">
            <UserProfile />
          </div>
        )}
        <div className="menu-toggle">
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
