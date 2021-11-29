import { Pokemon } from "../types/types";

const Card = ({ pokemon }: { pokemon: Pokemon }) => {

  const getPokemonType = (types: Pokemon["types"]) => {
    let concatTypes = "";
    if (types && types.length > 0) {
      types.forEach(({ type }) => {
        concatTypes = concatTypes.concat(`${type.name}, `)
      })
    }
    return (
      concatTypes.slice(0, -2)
    )
  };

  return (
    <div id="card" className={`p-6 rounded-md bg-orange-light transition-all ${pokemon.name ? "opacity-100" : "opacity-60"}`}>
      <div id="image" className="mb-2">
        <img alt="Pokemon front profile" className="mx-auto w-24 h-24"
          src={pokemon.sprites && pokemon.sprites.front_default} />
      </div>
      <div id="card-body" className="flex flex-col gap-2 w-48">
        <div id="title" className="mb-2 flex flex-col">
          <span className="capitalize text-lg font-bold text-black-dark">{pokemon.name}</span>
          <span className="text-xs capitalize">{getPokemonType(pokemon.types)} </span>
        </div>
        <div id="abilities">
          <span className="block text-sm">Habilidades:&nbsp;</span>
          <ul className="list-disc list-inside">
            {pokemon.abilities && pokemon.abilities.map(({ ability }) => (
              <li key={ability.name} className="list-item">
                <span className="capitalize text-sm inline text-black-dark">{ability.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};
export default Card;
