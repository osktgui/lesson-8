import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAC6g6-VFqjA7liPJWwD7PxTkTWWc0ba7M",
  authDomain: "crwn-db-c3ba3.firebaseapp.com",
  projectId: "crwn-db-c3ba3",
  storageBucket: "crwn-db-c3ba3.appspot.com",
  messagingSenderId: "517757199033",
  appId: "1:517757199033:web:91462b2bc5e63e4756f168",
  measurementId: "G-C078J2YZ70"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
