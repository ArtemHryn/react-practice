import {TextField } from '@mui/material';

export const TranslateFormItem = ({ onChangeInput, word }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="English word"
        variant="outlined"
        name="engWord"
        onChange={onChangeInput}
        value={word.engWord}
      />
      <TextField
        id="outlined-basic"
        label="Ukrainian word"
        variant="outlined"
        name="ukrWord"
        onChange={onChangeInput}
        value={word.ukrWord}
      />
    </>
  );
};
