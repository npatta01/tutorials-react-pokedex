export interface IPokemonType {
  name: string;
  url: string;
}
export interface IPokemonTypeContainer {
  slot: number;
  type: IPokemonType;
}

interface ISprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface IPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: IPokemonTypeContainer[];
  defaultImage?: string;
  defaultType?: string;
  sprites: ISprites;
}

export interface IPokemonListElement {
  id?: number;
  name: string;
  url?: string;
  defaultImage?: string;
}
