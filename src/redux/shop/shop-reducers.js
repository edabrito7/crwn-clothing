import ActionTypes from '../action-types';


const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    error: ''
}



const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_COLLECTIONS_START:
            return{...state, isFetching: true}
        case ActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {...state, collections: action.payload, isFetching: false}
        case ActionTypes.FETCH_COLLECTIONS_FAILED:
            return {...state, error: action.payload, isFetching: false}
        default:
            return state;
    }
}


export default shopReducer;