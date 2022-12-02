import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../images/bitcoin.png';

const Navbar = () => (
  <header className="header flex">
    <div className="logoheader flex">
      <div className="logo flex">
        <span className="back">
          <span className="white"><img src={logo} alt="Logo" className="logo" /></span>
        </span>
      </div>
    </div>
    <div className="rightData flex">
      <span><i className="fa fa-microphone" aria-hidden="true" /></span>
      <span>
        <i className="fa fa-cog" aria-hidden="true" />
      </span>
    </div>
  </header>
);

export default Navbar;
