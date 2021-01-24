import { InitialPageState } from 'client/reducers';
import { Driver } from 'client/reducers/drivers';
import { Constructor } from 'client/reducers/constructors';
import { fetchData } from 'server/utils';
import { DriverStandingsRow } from 'client/reducers/driverStandings';
import { ConstructorStandingsRow } from 'client/reducers/constructorStandings';

export async function getServerData(fetchFn: Fetch): Promise<InitialPageState> {
    return Promise.all([
        getDriverData(fetchFn),
        getConstructorData(fetchFn),
        getDriverStandings(fetchFn),
        getConstructorStandings(fetchFn),
        getSchedule(fetchFn),
        getResults(fetchFn),
    ]).then(([
        Drivers,
        Constructors,
        DriverStandings,
        ConstructorStandings,
        Schedule,
        Results,
    ]) => ({
        Drivers: mapDrivers(Drivers, DriverStandings, Constructors),
        Constructors,
        DriverStandings,
        ConstructorStandings,
        Schedule,
        Results,
    }));
}

function mapDrivers(
    Drivers: Omit<Driver, 'constructorId' | 'constructorName'>[],
    DriverStandings: DriverStandingsRow[],
    Constructors: Constructor[],
): Driver[] {
    return Drivers.map((driver) => {
        const { constructorId } = DriverStandings.find((standingsRow) => (
            standingsRow.driverId === driver.driverId
        )) as DriverStandingsRow;
        const driverConstructor = Constructors.find((constructor) => (
            constructor.constructorId === constructorId
        )) as Constructor;
        return {
            ...driver,
            constructorId: driverConstructor.constructorId,
            constructorName: driverConstructor.name,
        };
    });
}

async function getDriverData(fetchFn: Fetch): Promise<Omit<Driver, 'constructorId'>[]> {
    const { DriverTable: { Drivers } } = await fetchData('drivers', fetchFn);
    return Drivers;
}

async function getConstructorData(fetchFn: Fetch): Promise<Constructor[]> {
    const { ConstructorTable: { Constructors } } = await fetchData('constructors', fetchFn);
    return Constructors;
}

async function getDriverStandings(fetchFn: Fetch): Promise<DriverStandingsRow[]> {
    const {
        StandingsTable: { StandingsLists: [{ DriverStandings }] },
    } = await fetchData('driverStandings', fetchFn);
    return DriverStandings.map(({ Driver: DriverInfo, Constructors, ...data }: any) => ({
        ...data,
        driverId: DriverInfo.driverId,
        constructorId: Constructors[0].constructorId,
    }));
}

async function getConstructorStandings(fetchFn: Fetch): Promise<ConstructorStandingsRow[]> {
    const {
        StandingsTable: { StandingsLists: [{ ConstructorStandings }] },
    } = await fetchData('constructorStandings', fetchFn);
    return ConstructorStandings.map(({ Constructor: ConstructorInfo, ...data }: any) => ({
        ...data,
        constructorId: ConstructorInfo.constructorId,
    }));
}

async function getResults(fetchFn: Fetch) {
    const { RaceTable: { Races } } = await fetchData('', fetchFn);
    return Races;
}

async function getSchedule(fetchFn: Fetch) {
    const { RaceTable: { Races } } = await fetchData('', fetchFn, '2021');
    return Races;
}
