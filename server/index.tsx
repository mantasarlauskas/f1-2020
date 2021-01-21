import React from 'react';
import express from 'express';
import fetch from 'node-fetch';
import { Provider } from 'react-redux';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import App from 'client/components/App';
import { getServerData } from 'server/serverData';
import { getStore } from 'server/store';
import { StaticRouter } from 'react-router';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
    const index = readFileSync('public/index.html', 'utf8');
    const data = await getServerData(fetch);
    const store = getStore(data);
    const component = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>,
    );

    const html = index
        .replace('{{react}}', component)
        .replace('{{redux}}', JSON.stringify(store.getState()).replace(/</g, '\\u003c'));

    res.send(html);
});

app.listen(3000);
