import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { CartIconContainer,
    ShoppingIconSVG,
    ItemCountSpan  } from './cart-icon.styles';



const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconSVG />
            <ItemCountSpan>{itemCount}</ItemCountSpan>
        </CartIconContainer>
    )
    
}

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount,
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);