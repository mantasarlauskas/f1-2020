import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'client/components/App';
import { getStore } from 'server/store';
import { getServerData } from 'server/serverData';

getServerData(fetch as Fetch).then((data) => {
    render(
        <Provider store={getStore(data)}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.querySelector(('#root')),
    );
});
