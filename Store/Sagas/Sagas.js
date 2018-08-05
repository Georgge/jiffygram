import {takeEvery, call} from 'redux-saga/effects';
import {authentication, dataBase} from '../Services/Firebase';

const firebaseRegister = values =>
  authentication
    .createUserWithEmailAndPassword(values.mail, values.password)
    .then(success => success);

const dataBaseLog = ({uid, email, name}) => dataBase.ref(`users/${uid}`).set({
  user_name: name,
  email: email,
  user_picture: 'https://picsum.photos/200',
});

/**
 * uid = register.user.uid
 * email = register.user.email
 */

function* logGenerator(values) {
  try {
    const register = yield call(firebaseRegister, values.data);
    const {email, uid} = register;
    const {data: {name}} = values;
    console.log('logGenerator');
    console.log(register);
    yield call(dataBaseLog, {uid, email, name});
  } catch (error) {
    console.error('error!!!');
    console.error(error);
  }
}

export default function* primaryFunction() {
  yield takeEvery('REGISTER', logGenerator);
  console.log('from generated fuction');
}
