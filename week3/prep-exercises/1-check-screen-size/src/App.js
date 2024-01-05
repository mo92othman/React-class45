import React from 'react';
import AvatarComponent from './components/Avatar';
import useWindowSize from './hooks/useWindowSize';
import './App.css';

const App = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <div className="WindowSizeText">
        Window Size: {windowSize.width} x {windowSize.height}
      </div>
      <AvatarComponent name="A kid" minWidth={1001} maxWidth={Infinity} />
      <AvatarComponent name="A Man" minWidth={701} maxWidth={1000} />
      <AvatarComponent name="Older Man" minWidth={0} maxWidth={700} />
    </div>
  );
};

export default App;
