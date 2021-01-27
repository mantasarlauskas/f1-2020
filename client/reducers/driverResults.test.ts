import driverResultsReducer, { addDriverResults } from 'client/reducers/driverResults';
import { mapDriverResults } from 'client/utils/clientData';
import { getDriverResultsResponse } from 'client/testing/testFactories';

describe('driverResultsReducer', () => {
    const results = mapDriverResults(getDriverResultsResponse());

    it('adds driver results', () => {
        const driverResults = driverResultsReducer(
            { 1: results },
            addDriverResults('2', results),
        );

        expect(driverResults).toEqual({
            1: results,
            2: results,
        });
    });

    it('overrides driver results', () => {
        const driverResults = driverResultsReducer(
            { 1: [] },
            addDriverResults('1', results),
        );

        expect(driverResults).toEqual({
            1: results,
        });
    });

    it('does not add driver results', () => {
        const constructorResults = driverResultsReducer(
            { 1: [] },
            { ...addDriverResults('2', results), type: 'TYPE' } as any,
        );

        expect(constructorResults).toEqual({
            1: [],
        });
    });
});
