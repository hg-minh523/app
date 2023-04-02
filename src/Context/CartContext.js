import { createContext } from 'react';

export const CartContext = createContext({
  productList: [],
  handleOpen: false,
  handleAddProduct: () => {},
  handleRemoveProduct: () => {}
});