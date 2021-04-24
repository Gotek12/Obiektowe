import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ProductCard from "../../common/product/ProductCart"
import Typography from "@material-ui/core/Typography";

@inject("store")
@observer
class Cart extends Component {
  render() {
    return (
      <div>
          <Typography variant="h5" component="h2" style={{marginTop: "20px"}}>
              Item cards
          </Typography>
        <div>
          {Object.keys(this.props.store.cartOb).map((i, index) => (
              <ProductCard
                  key={index}
                  data={this.props.store.quantity}
                  data={this.props.store.cartOb[i]}
                  add={this.props.store.increaseEl}
                  rem={this.props.store.decreaseEl}
              />
          ))}
        </div>
      </div>
    );
  }
}
export default Cart;
