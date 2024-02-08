import { applyMiddleware, createStore } from 'redux';
import countdownMiddleware from '../components/redux/countdownMiddleware';
import countdownReducer from '../components/redux/reducer';

const store = createStore(countdownReducer, applyMiddleware(countdownMiddleware));

export default store;