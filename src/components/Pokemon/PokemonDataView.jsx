export function PokemonDataView({ pokemon: { data } }) {
  return (
    <div>
      <h1>PokemonInfo:</h1>
      <p>{data.name}</p>
      <img
        src={data.sprites.other['official-artwork'].front_default}
        alt="pokemon"
      />
      <ul>
        {data.stats.map(entry => (
          <li key={entry.stat.name}>
            <p>
              {entry.stat.name} <span>{entry.base_stat}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
