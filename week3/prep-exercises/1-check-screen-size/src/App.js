import React from 'react';
import AvatarComponent from './components/AvatarScreenSize';
import useWindowSize from './hooks/useWindowSize';
import './App.css';

const App = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <div className="WindowSizeText">
        {windowSize.width} x {windowSize.height}
      </div>
      <AvatarComponent />
    </>
  );
};

export default App;
