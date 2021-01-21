import React, { ReactNode } from 'react';
import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from 'client/reducers';
import { Provider } from 'react-redux';

export const renderWithRouter = (
    children: ReactNode,
    routerParams = { url: '/' },
) => {
    const history = createBrowserHistory();
    history.push(routerParams.url);
    return render(
        <Router history={history}>
            {children}
        </Router>,
    );
};

export const renderWithRedux = (
    children: React.ReactNode,
    initialState?: any,
) => {
    const store = createStore(rootReducer, initialState);
    return render(
        <Provider store={store}>
            {children}
        </Provider>,
    );
};

export const renderWithRouterAndRedux = (
    children: ReactNode,
    initialState?: any,
    routerParams = { url: '/', path: '/' },
) => {
    const store = createStore(rootReducer, initialState);
    const history = createBrowserHistory();
    history.push(routerParams.url);
    return render(
        <Provider store={store}>
            <Router history={history}>
                <Route path={routerParams.path}>
                    {children}
                </Route>
            </Router>
        </Provider>,
    );
};
