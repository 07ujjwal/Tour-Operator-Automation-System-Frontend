import "./Header.css";
import UserProfile from "../userProfile/UserProfile";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useAuthStore.getState();

  return (
    <header className="header">
      <nav className="navbar">
        <Link to={"/"} className="logo">
          TravelZone
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <Link to={"aboutUs"}>About Us</Link>
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
