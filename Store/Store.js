import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';

const reducerTest = (state=[0], action) => state;

function* primaryFunction() {
  // yield ES6
  console.log('from generated fuction');
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerTest,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(primaryFunction);

export default store;
