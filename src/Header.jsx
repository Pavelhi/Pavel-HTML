import React from 'react';

function Header() {
  return (
    <div className="header" id="header">
      <div className="header-left">
        <div className="color dark-blue"></div>
        <div className="color red"></div>
        <div className="color yellow"></div>
        <div className="color light-blue"></div>
      </div>
      <div className="header-right">
        <h1 className="header-title">
          Art <span>studio</span>
        </h1>
        <div className="header-branches">
          <p className="branch-item">photography</p>
          <p className="branch-item">art</p>
          <p className="branch-item">design and branding</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
