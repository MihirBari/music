import React from 'react';
import logo from '../assets/img/techsa.png';
import './style.css';

export const Loader = () => {
  return (
    <div className="loader-container">
      <img className="loader-image" src={logo} alt="loader" />
    </div>
  );
};