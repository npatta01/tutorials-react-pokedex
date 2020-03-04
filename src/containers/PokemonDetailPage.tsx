import * as React from "react";
import { PokemonService } from "../services/PokemonService";
import { IRawPokemon, IPokemon } from "../models/pokemon";
import PokemonCard from "../components/PokemonCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import styles from "./PokemonDetailPage.module.css";


//type IProps = {};

type IState = {
  pokemon?: IPokemon;
  showEvolutions: boolean;
};

interface RouteParams {
  id: string
}

interface IProps extends RouteComponentProps<RouteParams> {}

export default class PokemonDetailPage extends React.Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props);
    this.state = {
      showEvolutions: false,
      pokemon: undefined
    }
  }

  
  async componentDidMount() {
    const { id } = this.props.match.params;

    this.fetchData(id);

  }

  toggleEvolutions = ()=>{
    this.setState ({showEvolutions: !this.state.showEvolutions})

  };

  async fetchData(id:string){
    const pokemonData = await PokemonService.getPokemonDetails(id);

    this.setState({ pokemon: pokemonData });
  }


  async componentDidUpdate(prevProps:IProps) {
    
    const prevId = prevProps.match.params.id;
    const currentId = this.props.match.params.id;

    if (prevId !== currentId) {
      this.fetchData(currentId);
    }
  }


  renderEvolutions(){
    
    const pokemon = this.state?.pokemon;

    if (this.state.showEvolutions){
      
      return (
        <div >
                <h2>Evolutions </h2>
                <div className={styles.evolution}>
                    {pokemon?.evolutions.map((e, idx) => {
                        return <PokemonCard key={idx} pokemon={e}/>
                    })}

                </div>
                

              </div>
      )
    }else{
      return null;
    }

  }

  render() {
    const pokemon = this.state?.pokemon;
    
    if (pokemon) {
      return (
        <div>
          <Container>
              <div className={styles.pageTitle}>
                <h1> {pokemon.name} # {pokemon.id} </h1>

              </div>
              
              <Row>
                <Col>
                    <div className={styles.pokemonProfile}>
                        <img src={pokemon.image}></img>

                    </div>
                </Col>

                <Col>
                    <div>
                        {pokemon.description}
                      </div>

                    <div className={styles.abilities}>
                        <h3>Abilties</h3>

                        <div>
                          {pokemon.abilities.map((ability, idx) => {
                              return <Badge key={idx} variant="primary" className="mr-1">{ability}</Badge>
                          })}

                        </div>
                    </div>
                    

                    <div className={styles.types}>
                      <h3>Types</h3>
                      <div>
                        {pokemon.types.map((type, idx) => {
                            return <Badge key={idx} variant="primary" className="mr-1">{type}</Badge>
                        })}

                      </div>
                    </div>



                </Col>
              </Row>

              

              
              <div className="my-5">
                <Button onClick={this.toggleEvolutions} >Show Evolutions</Button>
              </div>

              {this.renderEvolutions()}
              

              <div>
                {/* <PokemonCard pokemon={pokemon} /> */}

                <pre>
                        {JSON.stringify(pokemon, null, 2)}
                </pre>

              </div>

          </Container>
        </div>
      );
    } else {
      return null;
    }
  }
}

//           <div> {pokemon.types[0].type.name} </div>
