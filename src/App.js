import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/" exact element={<BurgerBuilder/>}/>
            <Route path="/checkout" el={<Checkout/>}/>
          </Routes>
        </Layout>
      </div>
    )
  }
}

export default App;
