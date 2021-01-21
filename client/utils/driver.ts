import { Driver } from 'client/reducers/drivers';

export function getDriverFullName(driver?: Driver) {
    if (!driver) {
        return '';
    }

    const { givenName, familyName } = driver;
    return `${givenName} ${familyName}`;
}
