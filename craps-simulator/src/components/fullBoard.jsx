import React from 'react';
import '../App.css';
import Board from './board';
import SideBets from './sideBets';


const FullBoard = () => {
    return (
      <div className="craps-table">
        <Board />
        <SideBets />
      </div>
    );
  };
  
  export default FullBoard