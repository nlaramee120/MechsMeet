import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Auth from "../../utils/auth";

const Header = () => {
  if (Auth.loggedIn())
    return (
      <div>
        <div
          className="headerCont text-dark mb-4"
          style={{ backgroundColor: "#2d3e50", padding: "15px 0 15px 0" }}
        >
          <div className="headerLinks">
            <div className="homeLink">
              <Link to="/home">
                <img className="logo" src={`/images/logo1.png`} alt="text" />
              </Link>
            </div>
            <div className="navLinks">
              <Link className="myProfile text-dark" to="/me/:profileId">
                <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
                  My Profile
                </h1>
              </Link>
              <Link
                onClick={() => Auth.logout()}
                className="logoutBtn text-dark"
              >
                <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
                  Sign Out
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  if (!Auth.loggedIn())
    return (
      <div>
        <div
          className="headerCont text-dark mb-4"
          style={{ backgroundColor: "#2d3e50", padding: "15px 0 15px 0" }}
        >
          <div className="headerLinks">
            <div className="homeLink">
              <Link to="/home">
                <img className="logo" src={`/images/logo1.png`} alt="text" />
              </Link>
            </div>
            <div className="navLinks">
              <Link className="loginBtn text-dark" to="/login">
                <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
                  Sign In
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;
