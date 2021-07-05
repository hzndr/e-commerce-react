import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCRclj-o81jKQy0BV7tZNu0vU7zLm23t-s",
    authDomain: "e-commerce-react-268a7.firebaseapp.com",
    projectId: "e-commerce-react-268a7",
    storageBucket: "e-commerce-react-268a7.appspot.com",
    messagingSenderId: "1057624588523",
    appId: "1:1057624588523:web:df7e87332537e9db503eae",
    measurementId: "G-LQ6MX9DXTK"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //check if we signing in or signing out 
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }
  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Set up Google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;