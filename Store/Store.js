import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import primaryFunction from './Sagas/Sagas';
import CONSTANTS from './Constants';

const sessionReducer = (state=null, action) => {
  switch (action.type) {
    case CONSTANTS.ESTABLISH_SESSION:
      return action.data;
    case CONSTANTS.CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

const imageSingUpReducer = (state = {image: null}, action) => {
  switch (action.type) {
    case CONSTANTS.LOAD_IMAGE_SIGNUP:
      return {image: action.image};
    case CONSTANTS.CLEAN_IMAGE_SIGNUP:
      return {image: null};
    default:
      return state;
  }
};

const imageAddReducer = (state = {image: null}, action) => {
  switch (action.type) {
    case CONSTANTS.LOAD_IMAGE_ADD:
      return {image: action.image};
    case CONSTANTS.CLEAN_IMAGE_ADD:
      return {image: null};
    default:
      return state;
  }
};

const publicationsFromFirebase = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PUBLICATION_STORE:
      return [...state, ...action.data];
    default:
      return state;
  }
};

const autorsFromFirebase = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ADD_AUTORS_STORE:
      return [...state, ...action.data];
    default:
      return state;
  }
};

const publicationSuccessfulReducer = (state={state: null}, action) => {
  switch (action.type) {
    case CONSTANTS.PUBLICATION_SUCCESSFUL:
      return {state: 'SUCCESSFUL'};
    case CONSTANTS.PUBLICATION_ERROR:
      return {state: 'ERROR'};
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  publicationSuccessfulReducer,
  autorsFromFirebase,
  publicationsFromFirebase,
  sessionReducer,
  imageSingUpReducer,
  imageAddReducer,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(primaryFunction);

export default store;
