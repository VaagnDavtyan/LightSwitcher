import React from 'react';
import './button.css'

const Button = (props) => {
return (
  <div>
    <button onClick={props.click}>{props.text}</button>
  </div>
);
};

export default Button;