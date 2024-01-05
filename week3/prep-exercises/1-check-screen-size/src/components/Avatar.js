import React from 'react';
import useWithinWindowWidth from '../hooks/useWithinWindowWidth';
// import { BigHead } from '@bigheads/core';
import youngAvatar from '../assets/young.jpg';
import manAvatar from '../assets/man.jpg';
import oldAvatar from '../assets/old.jpg';

const AvatarComponent = ({ name, minWidth, maxWidth }) => {
  const shouldShow = useWithinWindowWidth(minWidth, maxWidth);

  let avatarSrc;

  // Determine the avatar source based on the name
  switch (name) {
    case 'A Kid':
      avatarSrc = youngAvatar;
      break;
    case 'A Man':
      avatarSrc = manAvatar;
      break;
    case 'Older Man':
      avatarSrc = oldAvatar;
      break;
    default:
      // Use a default image if name doesn't match any case
      avatarSrc = youngAvatar;
  }

  return shouldShow ? (
    <div className="AvatarComponent">
      <img src={avatarSrc} alt={`${name}'s Avatar`} />
      <p>{name}'s Avatar</p>
    </div>
  ) : null;
};
export default AvatarComponent;
