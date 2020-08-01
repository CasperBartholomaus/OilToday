import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer
});

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }


const configureStore = () => createStore(rootReducer, applyMiddleware(logger));

export default configureStore;