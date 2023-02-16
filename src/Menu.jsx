import React from 'react';
function Menu() {
    return(
        <div className="nav-menu">
        <a href="#header" className="menu-item logo">
          <img src="../img/icons/site-logo.svg" alt="logo" className="logo-img" />
        </a>
        <a href="#about" className="menu-item">
          <img
            src="../img/icons/section2-ic.svg"
            alt="about"
            className="item-img"
          />
        </a>
        <a href="#advantages" className="menu-item">
          <img
            src="../img/icons/section3-ic.svg"
            alt="feature"
            className="item-img"
          />
        </a>
        <a href="#photography" className="menu-item">
          <img
            src="../img/icons/section4-ic.svg"
            alt="photographer"
            className="item-img"
          />
        </a>
        <a href="#gallery" className="menu-item">
          <img
            src="../img/icons/section5-ic.svg"
            alt="portfolio"
            className="item-img"
          />
        </a>
        <a href="#contact" className="menu-item">
          <img
            src="../img/icons/section6-ic.svg"
            alt="contact"
            className="item-img"
          />
        </a>
      </div>
    )
}

export default Menu