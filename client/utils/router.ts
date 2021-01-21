import { FunctionComponent } from 'react';
import DriversPage from 'client/components/DriversPage';
import DriverPage from 'client/components/DriverPage';
import ConstructorPage from 'client/components/ConstructorPage';
import ConstructorsPage from 'client/components/ConstructorsPage';
import DriverStandingsPage from 'client/components/DriverStandingsPage';
import ConstructorStandingsPage from 'client/components/ConstructorStandingsPage';
import SchedulePage from 'client/components/SchedulePage';
import RoundResultsPage from 'client/components/RoundResultsPage';

enum RouteTypes {
    DRIVERS = 'Drivers',
    DRIVER = 'Driver',
    CONSTRUCTOR = 'Constructor',
    CONSTRUCTORS = 'Constructors',
    DRIVER_STANDINGS = 'Driver Standings',
    CONSTRUCTOR_STANDINGS = 'Constructor Standings',
    SCHEDULE = 'Schedule',
    ROUND_RESULTS = 'Round Results'
}

export interface RouterParams {
    id: string;
}

interface Route {
    type: RouteTypes,
    url: string;
    Component: FunctionComponent,
    exact?: boolean;
}

export const navigationRoutes: Route[] = [
    { type: RouteTypes.DRIVERS, url: '/drivers', Component: DriversPage },
    { type: RouteTypes.CONSTRUCTORS, url: '/constructors', Component: ConstructorsPage },
    { type: RouteTypes.DRIVER_STANDINGS, url: '/driver-standings', Component: DriverStandingsPage },
    { type: RouteTypes.CONSTRUCTOR_STANDINGS, url: '/constructor-standings', Component: ConstructorStandingsPage },
    { type: RouteTypes.SCHEDULE, url: '/schedule', Component: SchedulePage },
];

export const routes: Route[] = [
    ...navigationRoutes,
    { type: RouteTypes.DRIVER, url: '/drivers/:id', Component: DriverPage },
    { type: RouteTypes.CONSTRUCTOR, url: '/constructors/:id', Component: ConstructorPage },
    { type: RouteTypes.ROUND_RESULTS, url: '/roundResults/:id', Component: RoundResultsPage, exact: false },
];
