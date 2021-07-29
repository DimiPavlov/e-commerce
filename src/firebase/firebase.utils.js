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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase