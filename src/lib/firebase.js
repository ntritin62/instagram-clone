import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCkMbDStzZOYuRcgAlzY99N3XMmrpWI2dk',
  authDomain: 'instagram-9c908.firebaseapp.com',
  projectId: 'instagram-9c908',
  storageBucket: 'instagram-9c908.appspot.com',
  messagingSenderId: '861985948923',
  appId: '1:861985948923:web:30734b20bf4f8ffb3adc5e',
};

firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;
// seedDatabase(firebase);

export { firebase, FieldValue };
