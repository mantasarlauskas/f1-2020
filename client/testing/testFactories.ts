import { RoundResults } from 'client/reducers/roundResults';
import { PageState } from 'client/reducers';

export function getDriver() {
    return {
        driverId: 'albon',
        permanentNumber: '23',
        code: 'ALB',
        url: 'http://en.wikipedia.org/wiki/Alexander_Albon',
        givenName: 'Alexander',
        familyName: 'Albon',
        dateOfBirth: '1996-03-23',
        nationality: 'Thai',
        constructorId: 'red_bull',
        constructorName: 'Red Bull',
    };
}

export function getDriverStandingsRow() {
    return {
        position: '8',
        positionText: '8',
        points: '93',
        wins: '0',
        driverId: 'albon',
        constructorId: 'red_bull',
    };
}

export function getReduxState(): PageState {
    return {
        DriverResults: {},
        ConstructorResults: {},
        Drivers: [getDriver()],
        DriverStandings: [getDriverStandingsRow()],
        Constructors: [getConstructor()],
        ConstructorStandings: [getConstructorStandingsRow()],
        Schedule: [getSchedule()],
        RoundResults: {
            0: getRoundResults(),
        },
    };
}

export function getSchedule() {
    return {
        season: '2020',
        round: '1',
        url: 'https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix',
        raceName: 'Austrian Grand Prix',
        Circuit: {
            circuitId: 'red_bull_ring',
            url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
            circuitName: 'Red Bull Ring',
            Location: {
                lat: '47.2197',
                long: '14.7647',
                locality: 'Spielburg',
                country: 'Austria',
            },
        },
        date: '2020-07-05',
        time: '13:10:00Z',
    };
}

export function getConstructor() {
    return {
        constructorId: 'red_bull',
        url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
        name: 'Red Bull',
        nationality: 'Austrian',
    };
}

export function getConstructorStandingsRow() {
    return {
        position: '1',
        positionText: '1',
        points: '573',
        wins: '13',
        constructorId: 'red_bull',
    };
}

export function getConstructorResultsResponse() {
    return {
        RaceTable: {
            season: '2020',
            constructorId: 'alfa',
            Races: [
                {
                    season: '2020',
                    round: '1',
                    url: 'url',
                    raceName: 'Austrian Grand Prix',
                    Circuit: {
                        circuitId: 'red_bull_ring',
                        url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
                        circuitName: 'Red Bull Ring',
                        Location: {
                            lat: '47.2197',
                            long: '14.7647',
                            locality: 'Spielburg',
                            country: 'Austria',
                        },
                    },
                    date: '2020-07-05',
                    time: '13:10:00Z',
                    Results: [
                        {
                            number: '99',
                            position: '9',
                            positionText: '9',
                            points: '2',
                            Driver: {
                                driverId: 'giovinazzi',
                                permanentNumber: '99',
                                code: 'GIO',
                                url: 'url',
                                givenName: 'Antonio',
                                familyName: 'Giovinazzi',
                                dateOfBirth: '1993-12-14',
                                nationality: 'Italian',
                            },
                            Constructor: {
                                constructorId: 'alfa',
                                url: 'url',
                                name: 'Alfa Romeo',
                                nationality: 'Italian',
                            },
                            grid: '18',
                            laps: '71',
                            status: 'Finished',
                            Time: {
                                millis: '5476885',
                                time: '+21.146',
                            },
                            FastestLap: {
                                rank: '9',
                                lap: '70',
                                Time: {
                                    time: '1:08.796',
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '225.954',
                                },
                            },
                        },
                        {
                            number: '7',
                            position: '14',
                            positionText: 'R',
                            points: '0',
                            Driver: {
                                driverId: 'raikkonen',
                                permanentNumber: '7',
                                code: 'RAI',
                                url: 'url',
                                givenName: 'Kimi',
                                familyName: 'Räikkönen',
                                dateOfBirth: '1979-10-17',
                                nationality: 'Finnish',
                            },
                            Constructor: {
                                constructorId: 'alfa',
                                url: 'url',
                                name: 'Alfa Romeo',
                                nationality: 'Italian',
                            },
                            grid: '19',
                            laps: '53',
                            status: 'Wheel',
                            FastestLap: {
                                rank: '12',
                                lap: '48',
                                Time: {
                                    time: '1:09.031',
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '225.185',
                                },
                            },
                        },
                    ],
                },
            ],
        },
    };
}

export function getDriverResultsResponse() {
    return {
        RaceTable: {
            season: '2020',
            driverId: 'hamilton',
            Races: [
                {
                    season: '2020',
                    round: '1',
                    url: 'url',
                    raceName: 'Austrian Grand Prix',
                    Circuit: {
                        circuitId: 'red_bull_ring',
                        url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
                        circuitName: 'Red Bull Ring',
                        Location: {
                            lat: '47.2197',
                            long: '14.7647',
                            locality: 'Spielburg',
                            country: 'Austria',
                        },
                    },
                    date: '2020-07-05',
                    time: '13:10:00Z',
                    Results: [
                        {
                            number: '44',
                            position: '4',
                            positionText: '4',
                            points: '12',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'url',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British',
                            },
                            Constructor: {
                                constructorId: 'mercedes',
                                url: 'url',
                                name: 'Mercedes',
                                nationality: 'German',
                            },
                            grid: '5',
                            laps: '71',
                            status: 'Finished',
                            Time: {
                                millis: '5461428',
                                time: '+5.689',
                            },
                            FastestLap: {
                                rank: '3',
                                lap: '67',
                                Time: {
                                    time: '1:07.712',
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '229.572',
                                },
                            },
                        },
                    ],
                },
                {
                    season: '2020',
                    round: '2',
                    url: 'url',
                    raceName: 'Styrian Grand Prix',
                    Circuit: {
                        circuitId: 'red_bull_ring',
                        url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
                        circuitName: 'Red Bull Ring',
                        Location: {
                            lat: '47.2197',
                            long: '14.7647',
                            locality: 'Spielburg',
                            country: 'Austria',
                        },
                    },
                    date: '2020-07-12',
                    time: '13:10:00Z',
                    Results: [
                        {
                            number: '44',
                            position: '1',
                            positionText: '1',
                            points: '25',
                            Driver: {
                                driverId: 'hamilton',
                                permanentNumber: '44',
                                code: 'HAM',
                                url: 'url',
                                givenName: 'Lewis',
                                familyName: 'Hamilton',
                                dateOfBirth: '1985-01-07',
                                nationality: 'British',
                            },
                            Constructor: {
                                constructorId: 'mercedes',
                                url: 'url',
                                name: 'Mercedes',
                                nationality: 'German',
                            },
                            grid: '1',
                            laps: '71',
                            status: 'Finished',
                            Time: {
                                millis: '4970683',
                                time: '1:22:50.683',
                            },
                            FastestLap: {
                                rank: '3',
                                lap: '68',
                                Time: {
                                    time: '1:06.719',
                                },
                                AverageSpeed: {
                                    units: 'kph',
                                    speed: '232.989',
                                },
                            },
                        },
                    ],
                },
            ],
        },
    };
}

function getPitStops() {
    return [
        {
            driverId: 'albon',
            lap: '6',
            stop: '1',
            time: '14:22:39',
            duration: '28.417',
        },
    ];
}

function getRaceResults() {
    return [{
        driverName: 'Max Verstappen',
        driverNumber: '33',
        constructorName: 'Red Bull',
        position: '1',
        points: '25',
        grid: '1',
        laps: '55',
        status: 'Finished',
        time: '1:19:43:231',
    }];
}

function getQualifyingResults() {
    return [{
        position: '1',
        driverName: 'Valtteri Bottas',
        driverNumber: '77',
        constructorName: 'Mercedes',
        q1: '1:26.738',
        q2: '1:25.785',
        q3: '1:25.154',
    }];
}

export function getRoundResults(): RoundResults {
    return {
        PitStops: getPitStops(),
        Race: getRaceResults(),
        Qualifying: getQualifyingResults(),
    };
}
