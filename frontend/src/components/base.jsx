import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA8yDNmc2FlMbmAQnnLSy14H6HYGfSCTOU',
  authDomain: 'vrconnection-9c6e5.firebaseapp.com',
  databaseURL: 'https://vrconnection-9c6e5.firebaseio.com',
  projectId: 'vrconnection-9c6e5',
  storageBucket: 'vrconnection-9c6e5.appspot.com',
  messagingSenderId: '159879563412',
  appId: '1:159879563412:web:b51058d5df19f749aa4c81',
  measurementId: 'G-SPZYW9G15N',
});

export default app;
