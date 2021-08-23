import React from "react";

import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" style={{ width: "30%" }} />
    <ItemDetails>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
