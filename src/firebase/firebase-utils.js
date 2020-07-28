import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCCkthpv8It-NBUxo08ZN5REqxEOOZJFxo",
  authDomain: "crwn-db-7.firebaseapp.com",
  databaseURL: "https://crwn-db-7.firebaseio.com",
  projectId: "crwn-db-7",
  storageBucket: "crwn-db-7.appspot.com",
  messagingSenderId: "1074052661579",
  appId: "1:1074052661579:web:64a1e1557fe2fabb2c68ce",
  measurementId: "G-LM1WWY5ZZG"
};

  firebase.initializeApp( config );


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;