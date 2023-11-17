import React from 'react';
import '../App.css';
import CircleButton from './button';

const SideBets = () => {
    return (
    <div className="side-bets">
      <CircleButton label='E'/>
      <CircleButton label='C'/>
    </div>
    );
  };
  
  export default SideBets;