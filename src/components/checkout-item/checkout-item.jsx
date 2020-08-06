import React from 'react';
import { connect } from 'react-redux';

import {clearItemFromCart, RemoveItem, addItem} from '../../redux/cart/cart-actions'
import {CheckOutItemContainer,
    ImageContainer,
    PropsSpan,
    QuantitySpan,
    Arrow,
    ValueSpan,
    RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItemFromCart, RemoveItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <img alt='item' src={imageUrl}/>
            </ImageContainer>
            <PropsSpan>{name}</PropsSpan>
            <QuantitySpan>
                <Arrow onClick={() => RemoveItem(cartItem)}>
                    &#10094;
                </Arrow>
                <ValueSpan>{quantity}</ValueSpan>
                <Arrow onClick={() => addItem(cartItem)}>
                    &#10095;
                </Arrow>
            </QuantitySpan>
            <PropsSpan>{price}</PropsSpan>
            <RemoveButton onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
    
        </CheckOutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    RemoveItem: item => dispatch(RemoveItem(item)),

})

export default connect(null, mapDispatchToProps)(CheckoutItem);