import {takeEvery, call} from 'redux-saga/effects';
import {authentication} from '../Services/Firebase';

const firebaseRegister = (values) => authentication
  .createUserWithEmailAndPassword(values.mail, values.password)
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });

function* logGenerator(values) {
  yield call(firebaseRegister, values.data);
  console.log('logGenerator');
  console.log(values);
}

export default function* primaryFunction() {
  yield takeEvery('REGISTER', logGenerator);
  console.log('from generated fuction');
}
