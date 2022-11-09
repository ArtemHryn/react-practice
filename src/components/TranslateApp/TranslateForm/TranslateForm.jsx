import { Button} from '@mui/material';
import { nanoid } from 'nanoid';
// import { useReducer } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { TranslateFormItem } from './TranslateFormItem';
import { ButtonLayout } from './TranslateFormItem.styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

// const initialState = [{ id: nanoid(3), engWord: '', ukrWord: '' }];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'engWord':
//       return { ...state, [action.type]: action.payload };
//     case 'ukrWord':
//       return { ...state, [action.type]: action.payload };
//     case 'reset':
//       return initialState;
//     case 'addMore':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

export const TranslateForm = ({ onFormSubmit }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
    words: [{engWord: '', ukrWord: ''}]
  }});
  const { fields, append, remove } = useFieldArray({
    name: 'words',
    control,
  })

  // const onChangeInput = event => {
  //   dispatch({ type: event.target.name, payload: event.target.value });
  // };

  const onSubmit = ({words}) => {
        const wordsForList = words.map(word => ({ id: nanoid(3), ...word })); 
    onFormSubmit(wordsForList);
    // dispatch({ type: 'reset' });
    console.log(words)
  };

  // const handleAddMore = () => {
  //   dispatch({
  //     type: 'addMore',
  //     payload: { id: nanoid(3), engWord: '', ukrWord: '' },
  //   });
  // };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <TranslateFormItem
          key={field.id}
          index={index}
          // onChangeInput={onChangeInput}
          register={register}
          remove={remove}
        />
      ))}
      <ButtonLayout>
        <Button type="submit" variant="contained">
          add all words
        </Button>
        <Button
          type="button"
          variant="contained"
          size="small"
          onClick={() => {
            append();
          }}
        >
          Add more
        </Button>
      </ButtonLayout>
    </Form>
  );
};
