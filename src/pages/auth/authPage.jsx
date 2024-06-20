import { useState } from "react";

import "./Auth.css";
import Login from "../../components/auth/login/Login";
import Signup from "../../components/auth/signup/Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <div
          className={`form-container ${
            isLogin ? "login-active" : "signup-active"
          } `}
        >
          <Login />

          <Signup />
        </div>
      </div>
      <button className="toggle-button" onClick={toggleForm}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
};

export default AuthPage;
