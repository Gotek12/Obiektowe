import { observable, action } from "mobx";

class Shop {
  //mock products
  products = [
    {
      id: 1,
      name: "Xbox",
      description: "Microsft console",
      price: 999,
    },
    {
      id: 2,
      name: "PlayStation 5",
      description: "Sony console",
      price: 980,
    },
    {
      id: 3,
      name: "Xbox pad",
      description: "Xbox accessories",
      price: 99,
    },
    {
      id: 4,
      name: "PlayStation 5 pad",
      description: "PlayStation accessories",
      price: 140,
    },
    {
      id: 5,
      name: "MacBook Pro M1",
      description: "Apple accessories",
      price: 2500,
    },
    {
      id: 6,
      name: "HP Spectre 15",
      description: "HP accessories",
      price: 2000,
    },
  ];

  @observable
  carts = [];
  @observable
  cartOb = {};

  // @action
  // increaseEl(id) {
  //   this.carts.map(item => {
  //     if (item.product_id === id) item.quantity += 1;
  //     return item;
  //   });
  //   this.getCart();
  // }
  //
  //
  // @action
  // decreaseEl(id) {
  //   console.log(id);
  // }

  @action
  addToCart(id) {
    let found = false;
    this.carts.map((item) => {
      if (item.product_id === id) {
        item.quantity += 1;
        found = true;
      }
      return item;
    });
    if (!found) {
      this.carts.push({ product_id: id, quantity: 1 });
    }
    this.getCart();
  }

  @action
  getCart() {
    this.carts.map((item) => {
      for (let i in this.products) {
        if (item.product_id === this.products[i].id) {
          if (this.cartOb[item.product_id]) {
            this.cartOb[item.product_id] = {
              id: item.product_id,
              name: this.products[i].name,
              description: this.products[i].description,
              price: this.products[i].price * item.quantity,
              quantity: item.quantity
            };
          } else {
            this.cartOb[item.product_id] = {
              id: item.product_id,
              name: this.products[i].name,
              description: this.products[i].description,
              price: this.products[i].price,
              quantity: item.quantity
            };
          }
        }
      }
      return this.cartOb;
    });
  }
}

export default new Shop();
