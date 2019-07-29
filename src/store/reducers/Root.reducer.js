import { combineReducers } from "redux";
import TodoReducer from './Todo.reducer';

export default combineReducers({
    todo: TodoReducer,
})