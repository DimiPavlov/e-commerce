import React from "react"

import StripeCheckout from "react-stripe-checkout"


const StripeCheckoutButton = ({ price }) => {
    const stripePriceToPay = price * 100
    const publishableKey = 'pk_test_51JMsU4LxbK2teilXLkgNdqudYVgoZxzMOYdQsmQzZOdp1UP1ARjaJwKoOmmwNbByKPTwPdornzED1FE2shuHjNS6004Imo03u4'
    const onToken = (token) => {
        console.log(token)
        alert("Payment completed!!!")
    }
    return (
        <StripeCheckout 
        token={onToken}
        stripeKey={publishableKey}
        label="Pay now"
        billingAddress
        shippingAddress
        name="Dimi's e-shop"
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={stripePriceToPay}
        panelLabel="Pay now"
        />
    )
}

export default StripeCheckoutButton
