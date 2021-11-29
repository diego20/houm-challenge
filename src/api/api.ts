/**
 * Prepares URL with random offset between 0 and 70.
 * @returns string with random offset.
 */
const getRandomPokemons = (): string => {
  const pokemonQuantity = 15;
  const max = 70;
  const min = 0;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return `https://pokeapi.co/api/v2/pokemon?limit=${pokemonQuantity}&offset=${randomNumber}`;
}

/**
 * Fetches all Pokemon data
 * @returns Pokemon data
 */
const fetchApiData = async () => {
  try {
    const json = await fetch(getRandomPokemons());
    const { results }: { results: [] } = await json.json();
    return results;
  }
  catch (error) {
    // Do something with error
    console.error("Error obteniendo API", error);
  }
};

/**
 * Fetches single Pokemon data
 * @param url Pokemon URL to fetch
 * @returns Returns signle Pokemon data
 */
const getSinglePokemonData = async (url: string) => {
  const json = await fetch(url);
  try {
    const result = await json.json();
    return result;
  }
  catch (error) {
    // Do something with error
    console.error("Error obteniendo single Pokemon", error);
  };
};

export { fetchApiData, getSinglePokemonData };