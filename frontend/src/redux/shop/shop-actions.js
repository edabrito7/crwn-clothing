import ActionTypes from '../action-types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase-utils';


export const fetchCollectionsStart = () => ({
    type: ActionTypes.FETCH_COLLECTIONS_START
})


export const fetchCollectionsSuccess = collectionsMap => ({
    type: ActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = message => ({
    type: ActionTypes.FETCH_COLLECTIONS_FAILED,
    payload: message
})
export const fecthCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
            dispatch(fetchCollectionsStart())
        collectionRef.get()
        .then(snapshot=> {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);   
            dispatch(fetchCollectionsSuccess(collectionsMap))
        })
        .catch( err => dispatch(fetchCollectionsFailure(err.message)) )
        
    }
}