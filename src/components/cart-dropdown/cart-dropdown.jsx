import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss';



const CartDropDown = ({cartItems}) => {
    
    const MappingCartItems = cartItems.map( (item) => (
        <CartItem key={item.id} item={item} />
    ))

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {MappingCartItems}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const MapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
})

export default connect(MapStateToProps)(CartDropDown);