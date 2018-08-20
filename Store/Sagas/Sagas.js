import {takeEvery, call, select} from 'redux-saga/effects';
import {authentication, dataBase} from '../Services/Firebase';
import Frisbee from 'frisbee';
import CONSTANTS from '../Constants';

const firebaseRegister = values =>
  authentication
    .createUserWithEmailAndPassword(values.mail, values.password)
    .then(success => success);

const firebaseLogin = values =>
  authentication
    .signInWithEmailAndPassword(values.mail, values.password)
    .then(success => success);

const dataBaseLog = ({uid, email, name, userPicture}) =>
  dataBase.ref(`users/${uid}`).set({
    user_name: name,
    email: email,
    user_picture: userPicture,
});


const cloudinaryImageLog = ({image}) => {
  const {uri, type} = image;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const splitType = uri.split('.');
  const imageType = [...splitType].pop();

  const photo = {
    uri,
    type: `${type}/${imageType}`,
    name,
  };

  const formImage = new FormData();
  formImage.append('upload_preset', CONSTANTS.CLOUDINARY_PRESET);
  formImage.append('file', photo);

  return fetch(CONSTANTS.CLOUDINARY_NAME, {
    method: 'POST',
    body: formImage,
  })
  .then((response) => response.json())
  .catch((error) => error);
};

/**
 * uid = register.user.uid
 * email = register.user.email
 */

function* sagaRegister(values) {
  try {
    // load image
    const getImage = state => state.imageSingUpReducer;
    const image = yield select(getImage);
    console.log(image);
    const imageUri = yield call(cloudinaryImageLog, image);
    const userPicture = imageUri.secure_url;
    const register = yield call(firebaseRegister, values.data);
    const {email, uid} = register.user;
    const {data: {name}} = values;
    yield call(dataBaseLog, {uid, email, name, userPicture});
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

function* uploadPostSaga(values) {
  try {
    const image = yield select(state => state.imageAddReducer);
    console.log(image);
    const response = yield call(cloudinaryImageLog, image);
    console.log(response);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
}

export default function* primaryFunction() {
  yield takeEvery(CONSTANTS.REGISTER, sagaRegister);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTS.UPLOAD_POST, uploadPostSaga);
}
