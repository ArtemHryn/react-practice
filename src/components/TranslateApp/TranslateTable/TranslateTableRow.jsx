import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button, TextField } from '@mui/material';
import { Component } from 'react';

export class TranslateTableRow extends Component {
  state = {
    isEdit: false,
    engWord: this.props.word.engWord,
    ukrWord: this.props.word.ukrWord,
  };
  onEdit = () => {
      this.setState(prev => ({ isEdit: !prev.isEdit }));
      if (this.state.isEdit) {
       this.props.onEditWord({...this.props.word, ...this.state})   
      }
  };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { word, index, onDelete } = this.props;
    return (
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="right">{index + 1}</TableCell>
        {this.state.isEdit ? (
          <>
            <TableCell align="right">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="engWord"
                value={this.state.engWord}
                onChange={this.onChangeInput}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="ukrWord"
                value={this.state.ukrWord}
                onChange={this.onChangeInput}
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
          <Button variant="outlined" onClick={() => onDelete(word.id)}>
            Delete
          </Button>
          <Button variant="outlined" onClick={this.onEdit}>
            {this.state.isEdit ? 'Save' : 'Edit'}
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
