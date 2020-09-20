import React, { memo } from 'react';
import Menu from './Menu';
import './App.less';

function App() {
    return (
        <h1 className="components-App">
            Hi!
            <Menu />
        </h1>
    );
}

export default memo(App);
