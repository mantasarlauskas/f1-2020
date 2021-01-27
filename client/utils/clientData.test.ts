import { mapDriverResults, mapConstructorResults } from 'client/utils/clientData';
import { getDriverResultsResponse, getConstructorResultsResponse } from 'client/testing/testFactories';

describe('clientData', () => {
    describe('mapDriverResults', () => {
        it('maps driver results', () => {
            expect(mapDriverResults(getDriverResultsResponse())).toEqual([
                {
                    constructorName: 'Mercedes',
                    date: '2020-07-05',
                    fastestLap: '1:07.712',
                    grid: '5',
                    laps: '71',
                    points: '12',
                    position: '4',
                    raceName: 'Austrian Grand Prix',
                    roundId: '1',
                    status: 'Finished',
                    time: '+5.689',
                },
                {
                    constructorName: 'Mercedes',
                    date: '2020-07-12',
                    fastestLap: '1:06.719',
                    grid: '1',
                    laps: '71',
                    points: '25',
                    position: '1',
                    raceName: 'Styrian Grand Prix',
                    roundId: '2',
                    status: 'Finished',
                    time: '1:22:50.683',
                },
            ]);
        });
    });

    describe('mapConstructorResults', () => {
        it('maps constructor results', () => {
            expect(mapConstructorResults(getConstructorResultsResponse())).toEqual([
                {
                    driverResults: [
                        {
                            driverName: 'Antonio Giovinazzi',
                            fastestLap: '1:08.796',
                            grid: '18',
                            laps: '71',
                            points: '2',
                            position: '9',
                            status: 'Finished',
                            time: '+21.146',
                        },
                        {
                            driverName: 'Kimi Räikkönen',
                            fastestLap: '1:09.031',
                            grid: '19',
                            laps: '53',
                            points: '0',
                            position: '14',
                            status: 'Wheel',
                        },
                    ],
                    raceName: 'Austrian Grand Prix',
                    roundId: '1',
                },
            ]);
        });
    });
});
