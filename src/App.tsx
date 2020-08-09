import React from 'react';

import AboutPage from "./containers/AboutPage";

import PokemonListDetailPage from "./containers/PokemonListDetailPage";
import PokemonDetailPage from "./containers/PokemonDetailPage";
import NavHeader from "./components/NavHeader";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  //  useRouteMatch,
  //  useParams
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavHeader />

        <Switch>
          <Route exact path="/" component={PokemonListDetailPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/all" component={PokemonListDetailPage} />
          <Route exact path="/detail/:id" component={PokemonDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}
