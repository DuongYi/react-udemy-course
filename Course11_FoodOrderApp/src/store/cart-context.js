import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addIteam: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
