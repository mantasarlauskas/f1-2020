/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer, { InitialPageState } from 'client/reducers';

export function getStore(initialState: InitialPageState) {
    return createStore(
        rootReducer,
        initialState,
        process.env.NODE_ENV !== 'production' && typeof window !== 'undefined'
        && (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f,
    );
}

export function getPreloadedStore() {
    const preloadedState = (window as any).__PRELOADED_STATE__;
    delete (window as any).__PRELOADED_STATE__;
    return getStore(preloadedState);
}
