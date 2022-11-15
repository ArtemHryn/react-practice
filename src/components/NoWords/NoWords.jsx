import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Title, Container } from './NoWords.styled';

export const NoWords = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Sorry, there are no words</Title>
      <Button
        variant="contained"
        sx={{ width: '50%' }}
        onClick={() => navigate('/')}
      >
        Back to choose words
      </Button>
    </Container>
  );
};
