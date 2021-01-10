import React from "react"
import './App.css';
import Header from "./components/Header"
import InfoPage from "./components/pages/infoPage"
import TraditionalPets from "./components/pages/traditionalPets"
import ExoticPets from "./components/pages/exoticPets"

import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <h1>This is working</h1>
      <Switch>
      <Route exact path="/">
          <InfoPage />
        </Route>
        <Route path="/tradpets">
          <TraditionalPets />
        </Route>
        <Route>
          <ExoticPets path="exopets"/>
        </Route>


      </Switch>
    </div>
  );
}

export default App;
