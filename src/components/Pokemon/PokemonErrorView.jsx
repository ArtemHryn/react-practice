import errorImage from '../error.jpg'

export function PokemonErrorView({ message }) {
    return (
      <div>
            <img src={errorImage} alt="error" />
            <p>{ message }</p>
      </div>
    );
}