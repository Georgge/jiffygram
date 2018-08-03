import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import primaryFunction from './Sagas/Sagas';

const reducerTest = (state=[0], action) => state;

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerTest,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(primaryFunction);

export default store;
