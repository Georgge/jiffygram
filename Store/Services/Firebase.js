import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCHgZsXhSCQm6cqI6LGhVIsiwX773eQoyE',
  authDomain: 'jiffygram-805ea.firebaseapp.com',
  databaseURL: 'https://jiffygram-805ea.firebaseio.com',
  projectId: 'jiffygram-805ea',
  storageBucket: 'jiffygram-805ea.appspot.com',
  messagingSenderId: '990165322036',
};
firebase.initializeApp(config);

export const authentication = firebase.auth();
