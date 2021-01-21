import React from 'react';
import Navigation from 'client/components/Navigation';
import Router from 'client/components/Router';
import styles from 'client/components/App.less';
import useScrollToTop from 'client/hooks/useScrollToTop';

function App() {
    useScrollToTop();

    return (
        <>
            <Navigation />
            <div className={styles.content}>
                <Router />
            </div>
        </>
    );
}

export default App;
