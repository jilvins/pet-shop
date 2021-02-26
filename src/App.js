import React from "react"
import './App.css';
import Header from "./components/Header"
import Navbar from "./components/navBar"
import InfoPage from "./components/pages/infoPage"
import TraditionalPets from "./components/pages/traditionalPets"
import ExoticPets from "./components/pages/exoticPets"
import ShoppingList from "./components/pages/shoppingList"
import Footer from "./components/footer"
import Pet from './components/pages/Pet.js'

import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div id="main-content">
      <Switch>
      <Route exact path="/">
          <InfoPage />
        </Route>
        <Route path="/tradpets">
          <TraditionalPets />
        </Route>
        <Route path="/exopets">
          <ExoticPets />
        </Route>
        <Route path="/shoplist">
          <ShoppingList />
        </Route>
        <Route path='/pet/:id' children={<Pet />} />
      </Switch>
      </div>
      <Footer />
      
   
    </div>
  );
}

export default App;
