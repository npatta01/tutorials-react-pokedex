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

function Home() {
  return <h2>Home</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <NavHeader />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/all" component={PokemonListDetailPage} />
          <Route exact path="/detail" component={PokemonDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}
