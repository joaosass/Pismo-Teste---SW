import React from 'react';
import { Text } from './styles';

interface LoadingProps {
  isVisible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isVisible = false }) => {
  return (
    <>
      {isVisible && <Text>A long time ago in a galaxy far, far away...</Text>}
    </>
  );
}

export default Loading;
