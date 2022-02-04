import React from "react";
import './Header.css';
import Banner from './Banner.jpeg';

function Header(){
    return (
      <div className="header-container">
          <img src={Banner} alt="" className="banner" />
      </div>
    );
}

export default Header;