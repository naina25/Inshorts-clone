import React from "react";
import HamburgerDrawer from "./HamburgerDrawer";
import "./NavInshorts.css";

const NavInshorts = () => {
  return (
    <div className="nav">
      <div className="hamicon">
        <HamburgerDrawer />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="this is alternate text"
        height="80%"
      />
    </div>
  );
};

export default NavInshorts;
