import 'ignore-styles';
import React from 'react';
import express from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    const index = readFileSync('public/index.html', 'utf8');
    const component = renderToString(<App />);
    res.send(index.replace('<div id="root"></div>', `<div id="root">${component}</div>`));
});

app.listen(3000, () => {
    console.log('Server is listening!');
});
