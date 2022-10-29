import { Button} from '@mui/material';
import { nanoid } from 'nanoid';
import { useReducer } from 'react';
import styled from 'styled-components';
import { TranslateFormItem } from './TranslateFormItem';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const initialState = [{ id: nanoid(3), engWord: '', ukrWord: '' }];

const reducer = (state, action) => {
  switch (action.type) {
    case 'engWord':
      return { ...state, [action.type]: action.payload };
    case 'ukrWord':
      return { ...state, [action.type]: action.payload };
    case 'reset':
      return initialState;
    case 'addMore':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const TranslateForm = ({ onFormSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangeInput = event => {
    dispatch({ type: event.target.name, payload: event.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    onFormSubmit(state);
    dispatch({ type: 'reset' });
  };

  const handleAddMore = () => {
    dispatch({
      type: 'addMore',
      payload: { id: nanoid(3), engWord: '', ukrWord: '' },
    });
  };
  return (
    <Form onSubmit={onSubmit}>
      {state.map(word => (
        <TranslateFormItem
          key={word.id}
          word={word}
          onChangeInput={onChangeInput}
        />
      ))}
      <Button type="submit" variant="contained">
        add all words
      </Button>
      <Button type="button" variant="contained" onClick={handleAddMore}>
        Add more
      </Button>
    </Form>
  );
};
