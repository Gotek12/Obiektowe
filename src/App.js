import "./App.css";
import React from "react";
import Nav from "./common/nav/Nav";
import Home from "./components/mainpage/Home";
import { Route, Switch } from "react-router-dom";
import { AddProduct } from "./components/addproduct/AddProduct";
import Cart from "./components/cart/Cart";
import shopInstance from "./common/shop/Shop";
import {Provider} from "mobx-react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={shopInstance}>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={AddProduct} />
            <Route path="/card" component={Cart} />
          </Switch>
        </Provider>
      </div>
    );
  }
}
export default App;