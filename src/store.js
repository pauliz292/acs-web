import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './_reducers';

const initialState = {};

const middleware = [thunk];

// redux function to store state
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;