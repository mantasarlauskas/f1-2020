import constructorResultsReducer, { addConstructorResults } from 'client/reducers/constructorResults';
import { mapConstructorResults } from 'client/utils/clientData';
import { getConstructorResultsResponse } from 'client/testing/testFactories';

describe('constructorResultsReducer', () => {
    const results = mapConstructorResults(getConstructorResultsResponse());

    it('adds constructor results', () => {
        const constructorResults = constructorResultsReducer(
            { 1: results },
            addConstructorResults('2', results),
        );

        expect(constructorResults).toEqual({
            1: results,
            2: results,
        });
    });

    it('overrides constructor results', () => {
        const constructorResults = constructorResultsReducer(
            { 1: [] },
            addConstructorResults('1', results),
        );

        expect(constructorResults).toEqual({
            1: results,
        });
    });

    it('does not add constructor results', () => {
        const constructorResults = constructorResultsReducer(
            { 1: [] },
            { ...addConstructorResults('2', results), type: 'TYPE' } as any,
        );

        expect(constructorResults).toEqual({
            1: [],
        });
    });
});
