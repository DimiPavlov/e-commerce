import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./CartIcon.styles";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer> {itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
