import actionTypes from '../action-types';

export const toggleCartHidden = () => ({
    type: actionTypes.TOGGLE_HIDDEN_DROPDOWN
});


export const addItem = (item) => ({
    type: actionTypes.ADD_ITEMS_TO_CART,
    payload: item,
});