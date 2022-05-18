import React, { useState } from "react";
import "../../src/css/header.scss";
import headerLogo from "../images/header-logo.png"
import Navigation from "./Navigation";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <header className="header-main">
        <div className="header-top">
          <h3 className="header-text">This is an example of a notification message. It can be used to promote a specific campaign, etc.</h3>
        </div>
        <div className="site-container mt-50">
          <div className=" header-bottom">
            <div className="header-logo">
              <img src={headerLogo} alt="logo" />
            </div>
            <div className="header-menu" onClick={() => { setOpenModal(true); }}>
              <div className="hamburger-menu" id="hamburger-menu">
                <div className="menu-line1"></div>
                <div className="menu-line2"></div>
                <div className="menu-line3"></div>
              </div>
            </div>
            {openModal && (
              <Navigation closeCart={() => setOpenModal(false)} />
            )}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
