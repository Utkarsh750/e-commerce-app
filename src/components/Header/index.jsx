import React from "react";
import "./style.scss";
import logo from "../../assets/images.jpg";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <div className="logo">
            <img src={logo} alt="Ecommerce" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
