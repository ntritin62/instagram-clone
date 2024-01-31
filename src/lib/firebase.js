import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDQwk-qtegTmjsVpSIz50gdADZUK3VehJo',
  authDomain: 'instagram-30242.firebaseapp.com',
  projectId: 'instagram-30242',
  storageBucket: 'instagram-30242.appspot.com',
  messagingSenderId: '745476996388',
  appId: '1:745476996388:web:133a18f472df5a920847b1',
};

firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;
// seedDatabase(firebase);

export { firebase, FieldValue };
