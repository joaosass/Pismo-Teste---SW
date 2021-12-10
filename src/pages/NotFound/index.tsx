import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Text, BackButton } from './styles';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <Container>
      <Title>404</Title>
      <Text>These aren't the droids you're looking for</Text>
      <BackButton onClick={handleNavigate}><strong>↩</strong> Back to safety</BackButton>
    </Container>
  );
}

export default NotFound;
