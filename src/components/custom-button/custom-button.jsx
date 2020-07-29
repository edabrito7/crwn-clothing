import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({ children,isSignInwithGoogle,inverted, ...otherProps}) => {
    return(
        <button className={`${inverted ? 'inverted' : ''} ${isSignInwithGoogle ? 'sign-in-Google' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}


export default CustomButton;