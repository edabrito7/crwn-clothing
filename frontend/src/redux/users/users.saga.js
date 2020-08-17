import { takeLatest, put, all, call} from 'redux-saga/effects';

import actionTypes from '../action-types'
import {
    SignInSuccess, 
    SignInFailure, 
    signOutSuccess, 
    signOutFailure,
    singUpSuccess,
    signUpFailure,
} from './user-action';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase-utils';


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument,userAuth, additionalData);
        const userSnapshot = yield userRef.get()
        yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch(error) {
        yield put(SignInFailure(error.message))
    }
    
}



export function* onSignInWithGoogle () {

    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
        
    } catch(error) {
        yield put(SignInFailure(error.message))
    }
}


export function* onGoogleSignInStart() {

    yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START,onSignInWithGoogle)
}



export function* signInWithEmail({payload: {email, password}}) {

    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        yield put(SignInFailure(error.message))
    }
}

export function* onEmailSignInStart() {
    
    yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


export function* isUserAuthenticated() {

    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch(error) {
        yield put(SignInFailure(error))
    }
}

export function* singUpWithEmail({payload: {email,password,displayName}}) {
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(singUpSuccess({user, additionalData: { displayName } }))
    } catch(error) {
        yield put(signUpFailure(error.message))
    }
}

export function* signInAfterSignUp({payload: {user, additionalData } }) {
    try{
        yield getSnapshotFromUserAuth(user, additionalData);
    } catch(error) {
        yield put(signUpFailure(error.message))
    }
}

export function* onSignUpStart () {
    yield takeLatest(actionTypes.SIGN_UP_START, singUpWithEmail)
}

export function* onSignUpSucess() {
    yield takeLatest(actionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onCheckUserSession() {
    yield takeLatest(actionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* signOut() {
    
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error.message))
    }
}

export function* onSignOutStart () {
    yield takeLatest(actionTypes.SIGN_OUT_START, signOut)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSucess)
    ])
}