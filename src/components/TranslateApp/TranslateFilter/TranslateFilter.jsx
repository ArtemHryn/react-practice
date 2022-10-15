import { TextField } from '@mui/material';

export const TranslateFilter = ({ value, onFilter }) => {
  return (
    <TextField
      id="standard-basic"
      label="Filter"
      variant="standard"
      value={value}
          onChange={onFilter}
          style={{marginBottom: '20px', marginTop: '20px'}}
    />
  );
};
