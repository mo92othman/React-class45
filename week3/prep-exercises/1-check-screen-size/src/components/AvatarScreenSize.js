import React from 'react';
import { Mo, John, Joe } from './Avatar';
import useWithinWindowWidth from '../hooks/useWithinWindowWidth';

const AvatarComponent = () => {
  const isBig = useWithinWindowWidth(1001, Infinity);
  const isMedium = useWithinWindowWidth(701, 1000);
  const isSmall = useWithinWindowWidth(0, 700);

  let avatarToRender;

  if (isBig) {
    avatarToRender = <Mo />;
  } else if (isMedium) {
    avatarToRender = <John />;
  } else if (isSmall) {
    avatarToRender = <Joe />;
  }

  return <div className="avatar-container">{avatarToRender}</div>;
};

export default AvatarComponent;
