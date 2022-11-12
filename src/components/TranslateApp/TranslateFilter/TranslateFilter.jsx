import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/filterWord';
import { getFilter } from 'redux/selectors';

export const TranslateFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onFilter = e => {
    dispatch(update(e.target.value));
  };
  return (
    <TextField
      id="standard-basic"
      label="Filter"
      variant="standard"
      value={value}
      onChange={onFilter}
      style={{ marginBottom: '20px', marginTop: '20px' }}
    />
  );
};
