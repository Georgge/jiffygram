import {takeEvery, call} from 'redux-saga/effects';
import {authentication, dataBase} from '../Services/Firebase';
import CONSTANTS from '../Constants';

const firebaseRegister = values =>
  authentication
    .createUserWithEmailAndPassword(values.mail, values.password)
    .then(success => success);

const firebaseLogin = values =>
  authentication
    .signInWithEmailAndPassword(values.mail, values.password)
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

function* sagaRegister(values) {
  try {
    const register = yield call(firebaseRegister, values.data);
    const {email, uid} = register.user;
    const {data: {name}} = values;
    yield call(dataBaseLog, {uid, email, name});
  } catch (error) {
    console.error(`Register error: ${error}`);
  }
}

function* sagaLogin(values) {
  try {
    const login = yield call(firebaseLogin, values.data);
  } catch (error) {
    console.error(`Login error: ${error}`);
  }
}

export default function* primaryFunction() {
  yield takeEvery(CONSTANTS.REGISTER, sagaRegister);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
}
