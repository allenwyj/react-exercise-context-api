import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBMJpnKTds40_LiHpPoFBzM_xHWyiT2JLk',
  authDomain: 'crwn-clothing-project.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-project.firebaseio.com',
  projectId: 'crwn-clothing-project',
  storageBucket: 'crwn-clothing-project.appspot.com',
  messagingSenderId: '238230231584',
  appId: '1:238230231584:web:8dee35ff6a0e80e9e53a45',
  measurementId: 'G-79PVEFCKY5'
};

firebase.initializeApp(config);

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
