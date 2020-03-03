import * as React from "react";
import styles from "./PokemonCard.module.css";
import { IPokemon, IPokemonListElement } from "../models/pokemon";



interface Props {
  pokemon: IPokemon | IPokemonListElement;
}
interface State {}


export default class PokemonCard extends React.Component<Props, State> {
  render() {
    const { pokemon } = this.props;
    if (pokemon) {
      return (
        <div className={styles.card}>
          <h1 className={styles.title}>{pokemon.name}</h1>
          <div className={styles.image}>
            <img src={pokemon.defaultImage} alt={pokemon.name} />
          </div>

         
        </div>
      );
    } else {
      return null;
    }
  }
}
