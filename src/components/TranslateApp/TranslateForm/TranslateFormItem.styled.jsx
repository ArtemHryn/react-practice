import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

export const FormItemLayout = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled(TextField)`
  margin-left: 10px;
`;

export const StyledButton = styled(Button)`
  margin-left: 10px;
  padding: 0 10px;
`;

export const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px;
`;
