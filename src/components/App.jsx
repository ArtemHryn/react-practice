import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import { PokemonForm } from './Pokemon/PokemonForm';
import {PokemonInfo} from './Pokemon/PokemonInfo'



export class App extends Component {
  state = {
    pokemonName: '',
  };

  onSearchSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      setTimeout(async () => {

        this.setState({ loading: false });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <PokemonForm onFormSubmit={this.onSearchSubmit} />
        <PokemonInfo pokemonName={ this.state.pokemonName } />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}
