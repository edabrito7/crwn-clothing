import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({ children,isSignInwithGoogle, ...otherProps}) => {
    return(
        <button className={`${isSignInwithGoogle ? 'sign-in-Google' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}


export default CustomButton;