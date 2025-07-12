import { legacy_createStore, applyMiddleware,combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import movieReducer from './reducers/movieReducer';
 

const rootReducer = combineReducers({
  movie: movieReducer
});
 
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
