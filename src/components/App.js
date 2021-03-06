import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../style/App.css";

import Popular from "./Popular";
import Battle from "./Battle";
import Home from "./Home";
import Navigation from "./Navigation";
import Results from "./Results";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
          <Route path="/battle/results" component={Results} />
          <Route path="/popular" component={Popular} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
