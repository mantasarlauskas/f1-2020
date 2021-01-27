import { getDriverFullName } from 'client/utils/driver';
import { getDriver } from 'client/testing/testFactories';

describe('driver', () => {
    describe('getDriverFullName', () => {
        it('returns full driver name', () => {
            expect(getDriverFullName(getDriver())).toEqual('Alexander Albon');
            expect(getDriverFullName()).toEqual('');
        });
    });
});
