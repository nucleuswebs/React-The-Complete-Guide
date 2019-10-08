import { combineReducers } from 'redux';
import Application from './Application.reducer';

export default ( preloadedState: any ) => combineReducers({
    application: Application
})