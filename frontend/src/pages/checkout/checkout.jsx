import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import {
    CheckoutPageContainer, 
    CheckoutHeaderContainer, 
    HeaderBlockContainer,
    TotalStyle,
    TextWarning,} from './checkout.styles';

const CheckoutPage = ({cartItems, cartTotal}) => {
    const MappingcartItems = cartItems.map( item => 
         <CheckoutItem key={item.id} cartItem={item} />
    )
    return(
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>  
            {MappingcartItems}
            <TotalStyle>
                <span>Total: ${cartTotal}</span>
            </TotalStyle>
            <TextWarning>
                *Credentials to test Stripe-integration payment method* <br/>
                Creditcard: 4242 4242 4242 4242<br/>
                CVC: 123 <br/>
                an expiration date in the future
            </TextWarning>
            <StripeCheckoutButton price={cartTotal}/>
        </CheckoutPageContainer>
    )
}

const MapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
})




export default connect(MapStateToProps)(CheckoutPage);