import React from 'react';
import { Provider } from 'react-redux';
import { getPreloadedStore } from 'server/store';
import App from 'client/components/App';
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';

const store = getPreloadedStore();
hydrateRoot(
    document.querySelector(('#root'))!,
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);
