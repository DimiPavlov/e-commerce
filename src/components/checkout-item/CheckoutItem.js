import React from "react"

import { connect } from "react-redux"

import { removeItems, removeItem, addItem }  from "../../redux/cart/cart.actions"

import "./CheckoutItem.styles.scss"

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, price, imageUrl, quantity} = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrows" onClick={() => removeItem(cartItem)}>&#10096;</div>
            <span className="value">{quantity}</span>
            <div className="arrows" onClick={() => addItem(cartItem)}>&#10097;</div>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItem(cartItem) } >&#10008;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItems(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem)