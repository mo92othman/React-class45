import React from 'react';

const Button = ({ increment, text }) => {
  return <button onClick={increment}>{text}</button>;
};

export default Button;
