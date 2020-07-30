import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss';



const CartDropDown = ({cartItems, history, dispatch}) => {
    
    const MappingCartItems = cartItems.length ? 
    (cartItems.map( (item) => (
        <CartItem key={item.id} item={item} />)     
    )) 
    : (<span className='empty-cart'>Your cart is empty</span>)

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {MappingCartItems}
            </div>
            <CustomButton onClick={() => { 
                history.push('/checkout');
                dispatch(toggleCartHidden())}}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}


const MapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
})


export default withRouter(connect(MapStateToProps)(CartDropDown));