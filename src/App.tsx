import { useEffect, useState } from 'react';
import { fetchApiData, getSinglePokemonData } from './api/api';
import './App.css';
import Card from './reusable-components/card';
import SearchIcon from './reusable-components/search';
import Spinner from './reusable-components/spinner';
import { Pokemon, PokemonData } from './types/types';

function App() {

  const [pokemonData, setPokemonData]: [Array<PokemonData> | Array<any>, any] = useState([]);
  const [pokemons, setPokemons]: [Array<Pokemon>, any] = useState([]);
  const [filteredPokemons, setFilteredPokemons]: [Array<Pokemon>, any] = useState([]);
  const [isLoading, setIsLoading]: [boolean, any] = useState(false);

  /**
   * Fetch data from all Pokemons
   */
  const getPokemonData = async () => {
    setIsLoading(true);
    const result = await fetchApiData();
    setPokemonData(result);
    setIsLoading(false);
  }

  /**
   * Filta Pokemons por nombre en variable de estado filteredPokemons
   * @param query Criterio de búsqueda
   */
  const filterPokemons = (query: string) => {
    const matchedPokemons: Array<Pokemon> = [];
    pokemons.forEach((pokemon) => {
      if (pokemon.name?.includes(query))
        matchedPokemons.push(pokemon)
    })
    setFilteredPokemons(matchedPokemons);
  };

  /**
   * Fetch 15 Pokemons on start
   */
  useEffect(() => {
    getPokemonData();
  }, []);

  /**
   * Fetch single Pokemon data once all pokemon data is ready
   */
  useEffect(() => {
    const getSinglePokemon = async () => {
      const result = await Promise.all(
        pokemonData.map((pokemon: PokemonData) => (
          getSinglePokemonData(pokemon.url)
        ))
      )
      setPokemons(result);
      setFilteredPokemons(result);
    };
    getSinglePokemon();
  }, [pokemonData]);

  return (
    <div className="w-full h-full">
      <div id="container" className="w-3/5 mx-auto h-full py-8">
        <header className="py-4 mb-4 w-full mx-auto flex items-center flex-col gap-4">
          <h1 className="md:text-3xl text-2xl mb-4font-bold">Pokemon - Houm</h1>
          <p className="w-72 text-center text-sm">¡Haz click en el botón para obtener una mezcla diferente de Pokemons!</p>
          <div className="relative">
            <button className="px-12 py-2 rounded-3xl bg-orange text-white hover:bg-orange-dark"
              onClick={getPokemonData}>Shuffle!
            </button>
            {isLoading &&
              <div className="absolute top-0 py-3 left-4">
                <Spinner color={"text-white"} />
              </div>
            }
          </div>
        </header>
        <main>
          <div className="flex justify-center py-8">
            <div className="flex relative md:w-3/5">
              <input type="text" className="rounded-3xl border-2 border-gray-light px-12 py-2 w-full focus:border-gray-dark focus:border-2 transition outline-none" placeholder="Filtra por nombre"
                onChange={(e) => filterPokemons(e.target.value)} />
              <div className="absolute py-10-px px-3">
                <SearchIcon color={"text-orange"} />
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-wrap justify-evenly">
            {filteredPokemons.map((singlePokemon) => (
              <Card key={singlePokemon.id} pokemon={singlePokemon} />
            ))
            }
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
