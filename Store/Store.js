import {createStore, combineReducers} from 'redux';

const reducerTest = (state=[0], action) => state;

const reducers = combineReducers({
  reducerTest,
});

const store = createStore(reducers);

export default store;
