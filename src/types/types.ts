export type PokemonData = {
  url: string,
  name: string
};

export type Pokemon = {
  id?: number,
  sprites?: {
    front_default: string
  }
  name?: string,
  types?: [{
    type: {
      name: string
    }
  }],
  abilities?: [{
    ability: {
      name: string
    }
  }]
}
