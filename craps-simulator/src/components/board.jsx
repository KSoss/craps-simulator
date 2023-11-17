import React from 'react';
import '../App.css';
import Pass from './pass.jsx';
import Come from './come.jsx'
import Field from './field.jsx';
import Box from './box.jsx'


const Board = () => {
    return (
      <div className='main-board'>
        <Box/>
        <Come/>
        <Field/>
        <Pass label="Dont Pass Line"/>
        <Pass label="Pass Line"/>
      </div>
    );
  };
  
  export default Board