import * as React from "react";
import { PokemonMockService } from "../services/PokemonMockService";
import { IPokemonListElement } from "../models/pokemon";
import PokemonCard from "../components/PokemonCard";
import styles from "./PokemonListDetailPage.module.css";


interface IProps {}
interface IState {
  pokemons: IPokemonListElement[];
}
export default class PokemonListDetailPage extends React.Component<
  IProps,
  IState
> {
  async componentDidMount() {
    const pokemons = await PokemonMockService.getPokemons();

    this.setState({ pokemons: pokemons });
  }

  render() {
    
    const pokemons = this.state?.pokemons;

    if (pokemons) {
      return (
        <div>
          <div className={styles.container}>
            {pokemons.map((p, index) => {
              return <PokemonCard key={index} pokemon={p} />;
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
