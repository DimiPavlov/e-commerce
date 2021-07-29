import React from "react"

import "./CustomButton.styles.scss"


const CustomButton = ({ children, isGoogleSignIn, handleClick, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}   onClick={handleClick}>
        {children}
    </button>
)


export default CustomButton