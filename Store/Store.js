import {createStore, combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

const reducerTest = (state=[0], action) => state;

const reducers = combineReducers({
  reducerTest,
  form,
});

const store = createStore(reducers);

export default store;
