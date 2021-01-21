import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { getPreloadedStore } from 'server/store';
import App from 'client/components/App';
import { BrowserRouter } from 'react-router-dom';

const store = getPreloadedStore();
hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector(('#root')),
);
