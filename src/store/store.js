import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import RootReducer from './reducers/Root.reducer';

export default function configureStore( preLoadedState ) {
    return createStore(
        RootReducer,
        preLoadedState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
}
