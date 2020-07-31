import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, cartTotal}) => {
    const MappingcartItems = cartItems.map( item => 
         <CheckoutItem key={item.id} cartItem={item} />
    )
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>  
            {MappingcartItems}
            <div className='total'>
                <span>Total: ${cartTotal}</span>
            </div>
            <p className='test-warning'>
                *Credentials to test Stripe-integration payment method* <br/>
                Credicard: 4242 4242 4242 4242<br/>
                CVC: 123 <br/>
                an expiration date in the future</p>
            <StripeCheckoutButton price={cartTotal}/>
        </div>
    )
}

const MapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
})




export default connect(MapStateToProps)(CheckoutPage);