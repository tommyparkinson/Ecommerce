import React from "react";
import "./Header.css";
import Nav from './Nav'

function Header() {

  return (
    <div className="header">
      <div className="header__promo">
        <p>50% OFF NOW!!</p>
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </div>
    


      
  );
}

export default Header;