import { getMatchingRoute, RouteType } from 'client/utils/router';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
}));

describe('router', () => {
    describe('getMatchingRoute', () => {
        it('returns route type', () => {
            expect(getMatchingRoute('/drivers/31')).toEqual(expect.objectContaining({
                type: RouteType.DRIVER,
            }));
        });

        it('does not retun route type', () => {
            expect(getMatchingRoute('/teams/31')).toEqual(undefined);
        });
    });
});
