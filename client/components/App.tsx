import React from 'react';
import Navigation from 'client/components/Navigation';
import styles from 'client/components/App.less';
import useScrollToTop from 'client/hooks/useScrollToTop';
import { routes } from 'client/utils/router';
import { Route, Switch } from 'react-router-dom';
import EmptyPage from 'client/components/EmptyPage';
import PageHelmet from 'client/components/PageHelmet';

function App() {
    useScrollToTop();

    return (
        <>
            <PageHelmet />
            <Navigation />
            <div className={styles.page}>
                <Switch>
                    {routes.map(({
                        url,
                        Component,
                        exact = true,
                        customPage,
                    }) => (
                        <Route key={url} exact={exact} path={url}>
                            {customPage ? <Component /> : (
                                <div className={styles.content}>
                                    <Component />
                                </div>
                            )}
                        </Route>
                    ))}
                    <Route>
                        <div className={styles.content}>
                            <EmptyPage />
                        </div>
                    </Route>
                </Switch>
            </div>
            <footer className={styles.footer}>
                {`© F1 stats, ${new Date().getFullYear()}`}
            </footer>
        </>
    );
}

export default App;
