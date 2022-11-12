import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
// import { useReducer } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addWords } from 'redux/wordSlice';
import styled from 'styled-components';
import { TranslateFormItem } from './TranslateFormItem';
import { ButtonLayout } from './TranslateFormItem.styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const TranslateForm = ({ onFormSubmit }) => {
  const dispatch = useDispatch();

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      words: [{ engWord: '', ukrWord: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'words',
    control,
  });

  const onSubmit = ({ words }) => {
    const wordsForList = words.map(word => ({ id: nanoid(3), ...word }));
    onFormSubmit(wordsForList);
    dispatch(addWords(wordsForList));

    console.log(words);
  };

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
