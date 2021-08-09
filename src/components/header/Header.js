import React from "react"

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { createStructuredSelector } from "reselect"

import { auth } from "../../firebase/firebase.utils"
import { selectCartHidden } from "../../redux/cart/cart.selectors" 
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdown"

import "./Header.styles.scss"


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
            {currentUser ? ( 
            <div className="option" onClick={() => auth.signOut()}> SIGN OUT
            </div> ) 
            : 
                 ( <Link className="option" to="/signin">SIGN IN</Link> )
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)