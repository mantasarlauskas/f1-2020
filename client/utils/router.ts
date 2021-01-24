import { FunctionComponent } from 'react';
import { matchPath } from 'react-router';
import DriversPage from 'client/components/DriversPage';
import DriverPage from 'client/components/DriverPage';
import ConstructorPage from 'client/components/ConstructorPage';
import ConstructorsPage from 'client/components/ConstructorsPage';
import DriverStandingsPage from 'client/components/DriverStandingsPage';
import ConstructorStandingsPage from 'client/components/ConstructorStandingsPage';
import SchedulePage from 'client/components/SchedulePage';
import RoundResultsPage from 'client/components/RoundResultsPage';
import HomePage from 'client/components/HomePage';
import ResultsPage from 'client/components/ResultsPage';

export enum RouteType {
    HOME = 'Home',
    DRIVERS = 'Drivers',
    DRIVER = 'Driver',
    CONSTRUCTOR = 'Constructor',
    CONSTRUCTORS = 'Constructors',
    DRIVER_STANDINGS = 'Driver Standings',
    CONSTRUCTOR_STANDINGS = 'Constructor Standings',
    SCHEDULE = '2021 Schedule',
    RESULTS = 'Results',
    ROUND_RESULTS = 'Round Results'
}

export interface RouterParams {
    id: string;
}

export interface LocationState {
    prevPath: string;
    id: string;
}

export interface Route {
    type: RouteType,
    url: string;
    Component: FunctionComponent,
    exact?: boolean;
    customPage?: boolean;
}

interface NavRoute extends Route {
    navExact?: boolean
}

export const navigationRoutes: NavRoute[] = [
    { type: RouteType.HOME, url: '/', Component: HomePage, customPage: true },
    { type: RouteType.DRIVERS, url: '/drivers', Component: DriversPage, navExact: false },
    { type: RouteType.CONSTRUCTORS, url: '/constructors', Component: ConstructorsPage, navExact: false },
    { type: RouteType.DRIVER_STANDINGS, url: '/driver-standings', Component: DriverStandingsPage },
    { type: RouteType.CONSTRUCTOR_STANDINGS, url: '/constructor-standings', Component: ConstructorStandingsPage },
    { type: RouteType.RESULTS, url: '/results', Component: ResultsPage, navExact: false },
    { type: RouteType.SCHEDULE, url: '/schedule', Component: SchedulePage },
];

export const routes: Route[] = [
    ...navigationRoutes,
    { type: RouteType.DRIVER, url: '/drivers/:id', Component: DriverPage },
    { type: RouteType.CONSTRUCTOR, url: '/constructors/:id', Component: ConstructorPage },
    { type: RouteType.ROUND_RESULTS, url: '/results/:id', Component: RoundResultsPage, exact: false },
];

export function getMatchingRoute(pathname: string) {
    return routes.find(({ url, exact = true }) => matchPath(pathname, {
        path: url,
        exact,
    }));
}
