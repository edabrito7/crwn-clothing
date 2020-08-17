import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import {toggleCartHidden} from '../../redux/cart/cart-actions';

import CartItem from '../cart-item/cart-item';

import {CartDropdownContainer,
    EmptyCartStyle,
    CartItemsContainer,
    CartDropDownButton} from './cart-dropdown.styles';




const CartDropDown = ({cartItems, history, dispatch}) => {
    
    const MappingCartItems = cartItems.length ? 
    (cartItems.map( (item) => (
        <CartItem key={item.id} item={item} />)     
    )) 
    : (<EmptyCartStyle>Your cart is empty</EmptyCartStyle>)

    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {MappingCartItems}
            </CartItemsContainer>
            <CartDropDownButton onClick={() => { 
                history.push('/checkout');
                dispatch(toggleCartHidden())}}
            >
                GO TO CHECKOUT
            </CartDropDownButton>
        </CartDropdownContainer>
    )
}


const MapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
})


export default withRouter(connect(MapStateToProps)(CartDropDown));