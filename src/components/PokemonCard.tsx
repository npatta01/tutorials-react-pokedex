import * as React from "react";
import styles from "./PokemonCard.module.css";
import { IPokemonMini } from "../models/pokemon";
import { Link } from "react-router-dom";



interface Props {
  pokemon: IPokemonMini;
}
interface State {}


export default class PokemonCard extends React.Component<Props, State> {
  render() {
    const { pokemon } = this.props;
    if (pokemon) {
      return (
        <div className={styles.card} >
          <h1 className={styles.title}>{pokemon.name}</h1>
          <div className={styles.image}>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <Link to={`/detail/${pokemon.id}`}># {pokemon.id}</Link>

         
        </div>
      );
    } else {
      return null;
    }
  }
}
