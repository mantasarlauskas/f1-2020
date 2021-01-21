import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'client/utils/router';
import EmptyPage from 'client/components/EmptyPage';

function Router() {
    return (
        <Switch>
            {routes.map(({ url, Component, exact = true }) => (
                <Route key={url} exact={exact} path={url}>
                    <Component />
                </Route>
            ))}
            <Route>
                <EmptyPage />
            </Route>
        </Switch>
    );
}

export default Router;
