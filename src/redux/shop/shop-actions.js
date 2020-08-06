import ActionTypes from '../action-types';



export const updateCollections = collectionsMap => ({
    type: ActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})