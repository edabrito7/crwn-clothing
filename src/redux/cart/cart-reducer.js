import actionTypes from '../action-types';
import { AddItemToCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}


const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_HIDDEN_DROPDOWN:
            return {...state, hidden: !state.hidden}
        case actionTypes.ADD_ITEMS_TO_CART:
            return {...state, cartItems: AddItemToCart(state.cartItems, action.payload)}
        case actionTypes.CLEAR_ITEM_FROM_CART: 
        return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) }
        default:
            return state;
    }
}


export default cartReducer;