
export interface IPokemonTypeContainer {
  slot: number;
  type: {name: string, url:string};
}

export interface IPokemonAbility {
  slot:number;
  ability: {name: string, url:string};
}

interface ISprites {
  back_default: string|null;
  back_female: string|null;
  back_shiny: string|null;
  back_shiny_female: string|null;
  front_default: string|null;
  front_female: string|null;
  front_shiny: string|null;
  front_shiny_female: string|null;
}

export interface IRawPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: IPokemonTypeContainer[];
  abilities: IPokemonAbility[];
  sprites: ISprites;
  [x: string]: any ;
}

export interface IRawSpecies {
  name: string;
  url:string;
}

export interface IEvolution {species: IRawSpecies, evolves_to: IEvolution[]}

export interface IRawEvolution {
  id:number;
  chain: IEvolution
}

export interface IPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: string[];
  abilities:string[];
  image: string;
  description: string;
  evolutions: IPokemonMini[];
  [x: string]: any ;
}

export interface IPokemonMini {
  id?: number;
  name: string;
  url?: string;
  image?: string;
}

export interface IRawPokemonDescription {
  flavor_text_entries: {flavor_text: string, language: { name:string }}[];
  evolution_chain : {url:string}

  [x: string]: any ;
}