import actionTypes from '../action-types';
export const setCurrentUser = user => ({
    type: actionTypes.SET_CURRENT_USER,
    payload: user
});


export const googleSignInStart = () => ({
    type: actionTypes.GOOGLE_SIGN_IN_START
});


export const emailSignInStart = (emailAndPassword) => ({
    type: actionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const SignInSuccess = (user) => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: user
});


export const SignInFailure = (err) => ({
    type: actionTypes.SIGN_IN_FAILURE,
    payload: err
});


export const checkUserSession = () => ({
    type: actionTypes.CHECK_USER_SESSION
})


export const signOutStart = () => ({
    type: actionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: actionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: actionTypes.SIGN_OUT_FAILURE,
    payload: error
})


export const signUpStart = (dataSignUp) => ({
    type: actionTypes.SIGN_UP_START,
    payload: dataSignUp
})

 export const singUpSuccess = ({user, additionalData}) => ({
     type: actionTypes.SIGN_UP_SUCCESS,
     payload: {user, additionalData}
 })
export const signUpFailure = (error) => ({
    type: actionTypes.SIGN_UP_FAILURE,
    payload: error
})