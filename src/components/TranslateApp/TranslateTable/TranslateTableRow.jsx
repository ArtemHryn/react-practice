import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { deleteWord, editWords } from 'redux/wordSlice';
import { useDispatch } from 'react-redux';

export const TranslateTableRow = ({ word, index }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isEdit: false,
    engWord: word.engWord,
    ukrWord: word.ukrWord,
  });

  const onEdit = () => {
    setState(prev => ({ ...prev, isEdit: !prev.isEdit }));
    if (state.isEdit) {
      const updateWords = {
        engWord: state.engWord,
        ukrWord: state.ukrWord,
        id: word.id,
      };
      dispatch(editWords(updateWords));
    }
  };

  const onChangeInput = event => {
    setState(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onDelete = () => {
    dispatch(deleteWord(word.id));
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="right">{index + 1}</TableCell>
      {state.isEdit ? (
        <>
          <TableCell align="right">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              name="engWord"
              value={state.engWord}
              onChange={onChangeInput}
            />
          </TableCell>
          <TableCell align="right">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              name="ukrWord"
              value={state.ukrWord}
              onChange={onChangeInput}
            />
          </TableCell>
        </>
      ) : (
        <>
          <TableCell align="right">{word.engWord}</TableCell>
          <TableCell align="right">{word.ukrWord}</TableCell>
        </>
      )}
      <TableCell align="right">
        <Button variant="outlined" onClick={onDelete} disabled={state.isEdit}>
          Delete
        </Button>
        <Button variant="outlined" onClick={onEdit}>
          {state.isEdit ? 'Save' : 'Edit'}
        </Button>
      </TableCell>
    </TableRow>
  );
};
