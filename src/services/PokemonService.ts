import { IRawPokemon, IPokemonMini, IPokemon, IRawPokemonDescription, IRawEvolution } from "../models/pokemon";
import axios from "axios";

import payloadPokemons from './sample_data/all.json';
import payloadPokemonDetail from './sample_data/pokemon_detail.json';
import payloadPokemonDescription from './sample_data/pokemon_description.json';
import payloadPokemonEvolution from './sample_data/pokemon_evolution.json';
const BASE_IMAGE_URL =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full";

const API_BASE = "https://pokeapi.co/api/v2";


const USE_MOCK = false;

export class PokemonService {


  static async getPokemonDetails(id:number|string, mock=USE_MOCK): Promise<IPokemon> {
    let rawPokemonData:IRawPokemon ;
    let rawPokemonEvolutionData:IRawEvolution;
    let rawPokemonDescription: IRawPokemonDescription;

    let pokemonData: IPokemon ;
    const pokemonId = Number(id);

  
    if (mock){
      rawPokemonData = payloadPokemonDetail;
      rawPokemonEvolutionData = payloadPokemonEvolution;
      rawPokemonDescription = payloadPokemonDescription;
    }else{
      const urlDetail = `${API_BASE}/pokemon/${pokemonId}`;

      const responseDetail = await axios.get(urlDetail);
      rawPokemonData = responseDetail.data;

      const responseDescription = await axios.get(`${API_BASE}/pokemon-species/${pokemonId}`);
      rawPokemonDescription = responseDescription.data;


      const responseEvolution = await axios.get(rawPokemonDescription.evolution_chain.url);
      

      
      rawPokemonEvolutionData =  responseEvolution.data;

    }

    let evolutions = this.extractEvolutionChain(rawPokemonEvolutionData);
    

    pokemonData = {
      id:rawPokemonData.id
      , name:rawPokemonData.name
      , weight: rawPokemonData.weight
      , height: rawPokemonData.height
      , image:this.getImageUrl(pokemonId)
      , types: rawPokemonData.types.map(t=>t.type.name)
      , abilities: rawPokemonData.abilities.map(a=>a.ability.name)
      , description: rawPokemonDescription.flavor_text_entries.filter(f=>f.language.name==="en")[0].flavor_text
      , evolutions: evolutions
    };


    return pokemonData;
  }

  static async getPokemons(limit = 151, mock=USE_MOCK): Promise<IPokemonMini[]> {
    let pokemons: IPokemonMini[];

    if (mock){
      pokemons = payloadPokemons.results;
    } else {

      const url = `${API_BASE}/pokemon`;
      const queryParams = { limit: limit };
  
      const response = await axios.get(url, { params: queryParams });
  
      const data = response.data;
  
      pokemons = data.results;

    }


    pokemons.forEach((p, index) => {
      const id = index + 1;
      p.image = this.getImageUrl(id);
      p.id = id;
    });

    return pokemons;
  }


  static getImageUrl(id: number) {
    //.padStart(8, "0");
    const paddedId = id.toString().padStart(3, "0");

    return `${BASE_IMAGE_URL}/${paddedId}.png`;
  }


  private static  extractEvolutionChain(chain:IRawEvolution) : IPokemonMini[] {
    let evoChain = [];
    let evoData = chain.chain;


    while (evoData) {
        if (evoData.species){
            const data = evoData.species;
            let idStr = data.url.split("/").reverse()[1];
            const id = Number ( idStr)

            const pokemonData = {...data , id: id
            , image: this.getImageUrl(id)
            }
           
            evoChain.push(pokemonData);
            evoData = evoData.evolves_to[0];
        }
    }
    

    return evoChain;
}
}
