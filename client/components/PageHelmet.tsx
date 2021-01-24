import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { getMatchingRoute, Route } from 'client/utils/router';

function PageHelmet() {
    const { pathname } = useLocation();
    const [route, setRoute] = useState<Route | undefined>(getMatchingRoute(pathname));

    useEffect(() => {
        setRoute(getMatchingRoute(pathname));
    }, [pathname]);

    const isDefaultRoute = !route || route.url === '/';
    const title = isDefaultRoute ? 'F1 stats' : route!.type;
    const description = isDefaultRoute ? 'Formula 1 stats, results, standings and schedule'
        : `Formula 1 ${route!.type}`;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}

export default PageHelmet;
