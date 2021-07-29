import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const config = {
    apiKey: "AIzaSyCGxtt2exHHHBC6Bg1fMAvSmbKNqFkJ1xM",
    authDomain: "crown-db-6a688.firebaseapp.com",
    projectId: "crown-db-6a688",
    storageBucket: "crown-db-6a688.appspot.com",
    messagingSenderId: "291292578526",
    appId: "1:291292578526:web:97b2a48ceff13d5bd6784f"
};

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;





