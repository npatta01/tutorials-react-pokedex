import * as React from "react";
import { Container, Table } from "react-bootstrap";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Pokedex</h1>

          <p>
            The Pokédex is an electronic device designed to catalogue and
            provide information regarding the various species of Pokémon
            featured in the Pokémon video game, anime and manga series.
          </p>

          <p>
            The name Pokédex is a neologism including "Pokémon" (which itself is
            a portmanteau of "pocket" and "monster") and "index". The Japanese
            name is simply "Pokémon Encyclopedia", and it can feature every
            Pokémon on it, depending on the Pokédex.
          </p>

          <figure>
            <img
              src="https://giantbomb1.cbsistatic.com/uploads/original/2/27545/1066177-ashpokedex2.png"
              alt="pokedex"
            />
            <figcaption>Pokedex from ep1 of anime.</figcaption>
            <cite>
              <a href="https://www.giantbomb.com/pokedex/3055-1310/">
                Giantbomb
              </a>
            </cite>
          </figure>

          <div>
            <h2> Num Pokemons </h2>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Generation</th>
                  <th>New Pokemon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gen 1</td>
                  <td>151</td>
                </tr>
                <tr>
                  <td>Gen 2</td>
                  <td>100</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div>
            <iframe
              title="theme song"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QCILyXK1U58"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Container>
      </div>
    );
  }
}
