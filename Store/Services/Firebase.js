import * as firebase from 'firebase';
import FirebaseKey from './FirebaseConfig';


// Initialize Firebase
/* onst config = {
** apiKey: '',
** authDomain: '',
** databaseURL: '',
** projectId: '',
** orageBucket: '',
** messagingSenderId: '',
** };
**/

firebase.initializeApp(FirebaseKey);

export const authentication = firebase.auth();
export const dataBase = firebase.database();
