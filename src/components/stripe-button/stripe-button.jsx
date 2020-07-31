import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51HB5O5BxedXJbDfbVPhR0kYDQxMBmwFeQeUJiYsEIyaReZ8BSovKjs7flkcddGd4PWKh7aMnoMbeopPUSCqEPOJs00L03154uV';

const onToken = token => {
    console.log(token)
}
    return(
        <StripeCheckout 
        label='Pay now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton;