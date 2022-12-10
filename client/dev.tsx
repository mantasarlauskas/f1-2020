import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'client/components/App';
import { getStore } from 'server/store';
import { getServerData } from 'server/serverData';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root') as Element);

getServerData(fetch as Fetch).then((data) => {
    root.render(
        <Provider store={getStore(data)}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    );
});
