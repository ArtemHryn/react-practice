import { ImSpinner } from 'react-icons/im';
import { PokemonDataView } from './PokemonDataView';
import pendingImage from '../pending.png'


const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export function PokemonPendingView({ pokemonName }) {
    const pokemon = {
      data: {
        name: pokemonName,
        sprites: {
          other: {
            'official-artwork': {
              front_default: pendingImage,
            },
          },
        },
        stats: [],
      },
    };
  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
