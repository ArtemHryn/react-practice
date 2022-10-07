import { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';

export class App extends Component {
  state = {
    img: '',
    pokemon: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      setTimeout(async () => {
        const pokemon = await axios.get('/ditto');
        this.setState({
          img: pokemon.data.sprites.other['official-artwork'].front_default,
          pokemon,
        });
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <img src={this.state.img} alt="Ditto" />
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.pokemon && <p>This is pokemon</p>}
      </div>
    );
  }
}
