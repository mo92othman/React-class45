import { useDebugValue } from 'react';
import useWindowSize from './useWindowSize';

const useWithinWindowWidth = (minWidth, maxWidth) => {
  const windowSize = useWindowSize();

  useDebugValue(`Width: ${windowSize.width}`);

  return windowSize.width >= minWidth && windowSize.width <= maxWidth;
};

export default useWithinWindowWidth;
