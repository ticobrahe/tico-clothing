import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDi_Pir_OYNVJ3HIiplYUC6LtkcaUppD0o",
    authDomain: "tico-db.firebaseapp.com",
    databaseURL: "https://tico-db.firebaseio.com",
    projectId: "tico-db",
    storageBucket: "tico-db.appspot.com",
    messagingSenderId: "476406728838",
    appId: "1:476406728838:web:f58e3f6604f44cbf0ee907",
    measurementId: "G-GZFKMEPYQE"
  };

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;