import React from 'react';
import '../App.css';
import Numbers from './numbers'
import DontCome from './doNotCome';

const Box = () => {
    return (
    <div className="box-numbers-dont">
      <Numbers number='4'/>
      <Numbers number='5'/>
      <Numbers number='6'/>
      <Numbers number='8'/>
      <Numbers number='9'/>
      <Numbers number='10'/>
      <DontCome />
    </div>
    );
  };
  
  export default Box