import { InitialPageState } from 'client/state';
import { fetchData } from 'server/utils';
import { DriverStandingsRow } from 'client/state/driverStandings';
import { ConstructorStandingsRow } from 'client/state/constructorStandings';
import { Driver, Constructor, DriverStandings, ConstructorStandings, RaceInfo } from 'f1-api-interfaces';
import { DriverInformation } from '../client/state/drivers';

export async function getServerData(fetchFn: Fetch): Promise<InitialPageState> {
    return Promise.all([
        getDriverData(fetchFn),
        getConstructorData(fetchFn),
        getDriverStandings(fetchFn),
        getConstructorStandings(fetchFn),
        getSchedule(fetchFn),
        getResults(fetchFn),
    ]).then(([
        drivers,
        constructors,
        driverStandings,
        constructorStandings,
        schedule,
        results,
    ]) => ({
        Drivers: mapDrivers(drivers, driverStandings, constructors),
        Constructors: constructors,
        DriverStandings: driverStandings,
        ConstructorStandings: constructorStandings,
        Schedule: schedule,
        Results: results,
    }));
}

function mapDrivers(
    drivers: Driver[],
    driverStandings: DriverStandingsRow[],
    constructors: Constructor[],
): DriverInformation[] {
    return drivers.map((driver) => {
        const { constructorId } = driverStandings.find((standingsRow) => (
            standingsRow.driverId === driver.driverId
        )) || {};

        const driverConstructor = constructors.find((constructor) => (
            constructor.constructorId === constructorId
        ));

        return {
            ...driver,
            constructorId: driverConstructor?.constructorId,
            constructorName: driverConstructor?.name,
        };
    });
}

async function getDriverData(fetchFn: Fetch) {
    return fetchData<Driver[]>('drivers', fetchFn);
}

async function getConstructorData(fetchFn: Fetch) {
    return fetchData<Constructor[]>('constructors', fetchFn);
}

async function getDriverStandings(fetchFn: Fetch): Promise<DriverStandingsRow[]> {
    const [standings] = await fetchData<DriverStandings[]>('driverStandings', fetchFn);
    return standings.DriverStandings.map(({ Driver: DriverInfo, Constructors, ...data }) => ({
        ...data,
        driverId: DriverInfo.driverId,
        constructorId: Constructors[0].constructorId,
    }));
}

async function getConstructorStandings(fetchFn: Fetch): Promise<ConstructorStandingsRow[]> {
    const [standings] = await fetchData<ConstructorStandings[]>('constructorStandings', fetchFn);
    return standings.ConstructorStandings.map(({ Constructor: ConstructorInfo, ...data }) => ({
        ...data,
        constructorId: ConstructorInfo.constructorId,
    }));
}

async function getResults(fetchFn: Fetch) {
    return fetchData<RaceInfo[]>('', fetchFn);
}

async function getSchedule(fetchFn: Fetch) {
    return fetchData<RaceInfo[]>('', fetchFn, '2021');
}
