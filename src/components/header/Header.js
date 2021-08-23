import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LinkLogoContainer,
  OptionsContainer,
  LinkOption,
} from "./Header.styles";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LinkLogoContainer to="/">
      <Logo className="logo" />
    </LinkLogoContainer>
    <OptionsContainer>
      <LinkOption to="/shop">SHOP</LinkOption>
      <LinkOption to="/contact">CONTACT</LinkOption>
      {currentUser ? (
        <LinkOption as="div" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </LinkOption>
      ) : (
        <LinkOption to="/signin">SIGN IN</LinkOption>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
