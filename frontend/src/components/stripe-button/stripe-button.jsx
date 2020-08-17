import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { json } from 'body-parser';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51HB5O5BxedXJbDfbVPhR0kYDQxMBmwFeQeUJiYsEIyaReZ8BSovKjs7flkcddGd4PWKh7aMnoMbeopPUSCqEPOJs00L03154uV';

const onToken = token => {
    axios({
        url: 'payment',
        method: 'post',
        data: {
            amount: priceForStripe,
            token
        }
    }).then(response => {
        alert('Payment successful')
    }).catch(error => {
        console.log('Payment error:', json.parse(error));
        alert("There was an issue")
    })
}
    return(
        <StripeCheckout 
        label='Pay now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        image='https://sendeyo.com/up/d/f3eb2117da'
        token={onToken}
        stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton;