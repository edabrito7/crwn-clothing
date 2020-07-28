import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCA4DgV8c1xKV0nqGGSU7zpnIz6phkaWtI",
    authDomain: "crwn-clothing-ve.firebaseapp.com",
    databaseURL: "https://crwn-clothing-ve.firebaseio.com",
    projectId: "crwn-clothing-ve",
    storageBucket: "crwn-clothing-ve.appspot.com",
    messagingSenderId: "773716127179",
    appId: "1:773716127179:web:877b77d36dc691667c9a4e",
    measurementId: "G-S7ZX63J514"
  };

  firebase.initializeApp({ config });


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth().signInWithPopup(provider)