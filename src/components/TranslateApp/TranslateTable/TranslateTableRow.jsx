import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button, Checkbox, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWord, updateWord } from 'redux/operations';

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
        isLearn: word.isLearn,
        id: word.id,
      };
      dispatch(updateWord(updateWords));
    }
  };

  const onChangeLearn = (_, status) => {
    const updateWords = {
      engWord: state.engWord,
      ukrWord: state.ukrWord,
      isLearn: status,
      id: word.id,
    };
    dispatch(updateWord(updateWords));
  };
  const onChangeInput = event => {
    setState(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onDelete = () => {
    dispatch(deleteWord(word.id));
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="right">
        <Checkbox checked={word.isLearn} onChange={onChangeLearn} />
      </TableCell>
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
        <Button
          variant="outlined"
          onClick={onDelete}
          disabled={state.isEdit}
          sx={{ marginRight: '10px' }}
        >
          Delete
        </Button>
        <Button variant="outlined" onClick={onEdit}>
          {state.isEdit ? 'Save' : 'Edit'}
        </Button>
      </TableCell>
    </TableRow>
  );
};
