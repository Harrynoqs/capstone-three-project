import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const DetailsHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className="header-detail flex">
      <div className="logoheaderDetail part2 flex">
        <div className="logoMore flex">
          <span className="back">
            <i className="fa fa-chevron-left" aria-hidden="true" onClick={() => handleClick()} />
            <span className="back-txt white">Home</span>
          </span>
        </div>
        <div className="homeheader">
          <span className="white">Crypto Currency</span>
        </div>
      </div>
      <div className="right-side flex">
        <span><i className="fa fa-microphone" aria-hidden="true" /></span>
        <span className="settings">
          <i className="fa fa-cog" aria-hidden="true" />
        </span>
      </div>
    </header>
  );
};

export default DetailsHeader;
