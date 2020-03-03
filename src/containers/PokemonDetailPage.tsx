import * as React from "react";
import { PokemonMockService } from "../services/PokemonMockService";
import { IPokemon } from "../models/pokemon";
import PokemonCard from "../components/PokemonCard";

type IProps = {};

type IState = {
  pokemon: IPokemon;
};

export default class PokemonDetailPage extends React.Component<IProps, IState> {
  async componentDidMount() {
    const pokemonData = await PokemonMockService.getPokemonDetails();

    this.setState({ pokemon: pokemonData });
  }

  render() {
    const pokemon = this.state?.pokemon;
    if (pokemon) {
      return (
        <div>
          <h2>single Pokemon detail page</h2>

          <div>
            <PokemonCard pokemon={pokemon} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

//           <div> {pokemon.types[0].type.name} </div>
