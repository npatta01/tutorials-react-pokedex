import { IPokemon, IPokemonListElement } from "../models/pokemon";
import axios from "axios";

const BASE_IMAGE_URL =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full";
const API_BASE = "https://pokeapi.co/api/v2";

export class PokemonMockService {
  static getImageUrl(id: number) {
    //.padStart(8, "0");
    const paddedId = id.toString().padStart(3, "0");

    return `${BASE_IMAGE_URL}/${paddedId}.png`;
  }
  static async getPokemonDetails(id = 5): Promise<IPokemon> {
    let data: IPokemon = {
      height: 4,
      id: 25,
      name: "pikachu",
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        back_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        back_shiny_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        front_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        front_shiny_female:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
      },
      types: [
        {
          slot: 1,
          type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/"
          }
        }
      ],
      defaultType: "electric",
      weight: 60
    };

    //data.defaultImage = data.sprites.front_default;
    data.defaultImage = this.getImageUrl(data.id);
    return data;
  }

  static async getPokemons(limit = 151): Promise<IPokemonListElement[]> {
    // const url = `${API_BASE}/pokemon`;
    // const queryParams = { limit: limit };

    // const response = await axios.get(url, { params: queryParams });

    // const data = response.data;

    // const pokemons: IPokemonListElement[] = data.results;

    const pokemons: IPokemonListElement[] = [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/"
      },
      {
        name: "metapod",
        url: "https://pokeapi.co/api/v2/pokemon/11/"
      },
      {
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon/12/"
      },
      {
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon/13/"
      },
      {
        name: "kakuna",
        url: "https://pokeapi.co/api/v2/pokemon/14/"
      },
      {
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon/15/"
      },
      {
        name: "pidgey",
        url: "https://pokeapi.co/api/v2/pokemon/16/"
      },
      {
        name: "pidgeotto",
        url: "https://pokeapi.co/api/v2/pokemon/17/"
      },
      {
        name: "pidgeot",
        url: "https://pokeapi.co/api/v2/pokemon/18/"
      },
      {
        name: "rattata",
        url: "https://pokeapi.co/api/v2/pokemon/19/"
      },
      {
        name: "raticate",
        url: "https://pokeapi.co/api/v2/pokemon/20/"
      }
    ];

    pokemons.forEach((p, index) => {
      const id = index + 1;
      p.defaultImage = this.getImageUrl(id);
      p.id = id;
    });

    return pokemons;
  }
}
