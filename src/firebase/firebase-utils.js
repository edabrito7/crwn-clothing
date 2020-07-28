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


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();


    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;