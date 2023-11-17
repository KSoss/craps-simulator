import React from 'react';
import '../App.css'

const CircleButton = ({ label }) => {
  return (
    <button className="circle-button">
      {label}
    </button>
  );
}

export default CircleButton;
