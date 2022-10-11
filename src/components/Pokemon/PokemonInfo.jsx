import axios from 'axios';
import { Component } from 'react';
import { PokemonDataView } from './PokemonDataView';
import { PokemonErrorView } from './PokemonErrorView';
import { PokemonPendingView } from './PokemonPendingView';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

export class PokemonInfo extends Component {
  state = { pokemon: null, error: null, status: 'idle' };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      try {
        this.setState({ status: 'pending'});
        const pokemon = await axios.get(`${this.props.pokemonName}`);
        this.setState({ pokemon, status: 'resolved' });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
    if (status === 'idle') {
      return <p>Enter Pokemon Name</p>;
    }
    if (status === 'pending') {
      return <PokemonPendingView pokemonName={this.props.pokemonName}/>
    }
    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
      // return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />
    }
  }
}
