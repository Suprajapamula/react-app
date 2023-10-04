import {combineReducers, createStore} from  'redux';
import todolistReducer from './reducers/Todolist.reducer';
import counterReducer from './reducers/Counter.reducer';
var finalReducer=combineReducers({c:counterReducer,t:todolistReducer})

var store=new createStore(finalReducer)
export default store;