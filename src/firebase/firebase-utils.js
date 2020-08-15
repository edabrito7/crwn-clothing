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


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
}

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


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {

  const collectionRef = firestore.collection(collectionKey);


  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    console.log(newDocRef);
  });


  return await batch.commit()
}


export const convertCollectionsSnapshotToMap = (collections) => {

  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return  {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  console.log(transformedCollection)
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
}


export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;