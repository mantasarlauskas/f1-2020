import { Driver } from 'f1-api-interfaces';

export function getDriverFullName(driver?: Driver) {
    if (!driver) {
        return '';
    }

    const { givenName, familyName } = driver;
    return `${givenName} ${familyName}`;
}
