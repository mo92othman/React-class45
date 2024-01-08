import React, { useState, useEffect } from 'react';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';

const Heart = ({ onHeartClick, isFavorited }) => {
  const [favorited, setFavorited] = useState(isFavorited);

  useEffect(() => {
    setFavorited(isFavorited);
  }, [isFavorited]);

  const handleClick = () => {
    setFavorited((prev) => !prev);
    if (onHeartClick) {
      onHeartClick();
    }
  };

  return (
    <button onClick={handleClick}>
      {favorited ? (
        <img src={HeartSolid} alt="Solid Heart" />
      ) : (
        <img src={HeartRegular} alt="Regular Heart" />
      )}
    </button>
  );
};

export default Heart;
