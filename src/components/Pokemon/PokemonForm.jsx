import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormEl, Input, FormButton } from './PokemonForm.styled';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  onChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };
  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      toast.success('empty search', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onFormSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <FormEl onSubmit={this.onFormSubmit}>
        <Input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.onChange}
        />
        <FormButton type="submit">
          <BsSearch style={{ marginRight: 8 }} />
          Find
        </FormButton>
      </FormEl>
    );
  }
}
