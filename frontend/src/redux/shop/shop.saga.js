import { takeLatest ,all, call,put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop-actions'

import ActionTypes from '../action-types';


export function* fetchCollectionAsync() {
    console.log("Im am fired");

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
    

}


export function* fecthColecctionsStart() {
    yield takeLatest
        (ActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync )
}


export function* shopSagas() {
    yield all([
        call(fecthColecctionsStart)
    ])
}