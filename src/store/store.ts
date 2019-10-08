import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers/Root.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({});

export default function configureStore( preloadedState: any )
{
    return createStore(
        createRootReducer(preloadedState),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                thunk
            )
        )
    )
}