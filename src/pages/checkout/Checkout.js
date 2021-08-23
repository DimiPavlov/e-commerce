import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton";

import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  TotalContainer,
  TextContainer,
} from "./Checkout.styles";

const Checkout = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeaderContainer>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>Total: ${total}</span>
    </TotalContainer>
    <TextContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: any - CVV: any
    </TextContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
