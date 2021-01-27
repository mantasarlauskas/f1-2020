import roundResultsReducer, { addRoundResults, RoundResults } from 'client/reducers/roundResults';
import { getRoundResults } from 'client/testing/testFactories';

describe('roundResultsReducer', () => {
    const results = getRoundResults();

    it('adds round results', () => {
        const driverResults = roundResultsReducer(
            { 1: results },
            addRoundResults('2', results),
        );

        expect(driverResults).toEqual({
            1: results,
            2: results,
        });
    });

    it('overrides round results', () => {
        const driverResults = roundResultsReducer(
            { 1: {} as RoundResults },
            addRoundResults('1', results),
        );

        expect(driverResults).toEqual({
            1: results,
        });
    });

    it('does not add round results', () => {
        const constructorResults = roundResultsReducer(
            { 1: {} as RoundResults },
            { ...addRoundResults('2', results), type: 'TYPE' } as any,
        );

        expect(constructorResults).toEqual({
            1: {},
        });
    });
});
