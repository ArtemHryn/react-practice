import { Button, TextField } from '@mui/material';
import { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const initialState = { engWord: '', ukrWord: '' };

export class TranslateForm extends Component {
  state = { ...initialState };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(initialState);
  };

  render() {
    const { engWord, ukrWord } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <TextField
          id="outlined-basic"
          label="English word"
          variant="outlined"
          name="engWord"
          onChange={this.onChangeInput}
          value={engWord}
        />
        <TextField
          id="outlined-basic"
          label="Ukrainian word"
          variant="outlined"
          name="ukrWord"
          onChange={this.onChangeInput}
          value={ukrWord}
        />
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </Form>
    );
  }
}
