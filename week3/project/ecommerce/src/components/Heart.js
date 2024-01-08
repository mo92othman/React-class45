import React, { useState } from 'react';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';

const Heart = ({ onHeartClick }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited((prev) => !prev);
    if (onHeartClick) {
      onHeartClick();
    }
  };

  return (
    <button onClick={handleClick}>
      {isFavorited ? (
        <img src={HeartSolid} alt="Solid Heart" />
      ) : (
        <img src={HeartRegular} alt="Regular Heart" />
      )}
    </button>
  );
};

export default Heart;
