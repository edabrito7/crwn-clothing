import ActionTypes from '../action-types';


const INITIAL_STATE = {
    collections: {},
}



const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_COLLECTIONS:
            console.log(action.payload);
            return{...state, collections: action.payload}
        default:
            return state;
    }
}


export default shopReducer;