import { DriverResultsRow } from 'client/reducers/driverResults';
import { ConstructorResultsRow } from 'client/reducers/constructorResults';
import { getDriverFullName } from 'client/utils/driver';
import { PitStopRow, QualifyingResultsRow, RaceResultsRow, RoundResults } from 'client/reducers/roundResults';

export function mapDriverResults({ RaceTable: { Races } }: any): DriverResultsRow[] {
    return Races.map(({ raceName, date, Results: [Result] }: any) => {
        const { position, points, grid, laps, status, Constructor: { name }, Time, FastestLap } = Result;
        return {
            raceName,
            date,
            position,
            points,
            grid,
            laps,
            status,
            constructorName: name,
            time: Time?.time,
            fastestLap: FastestLap?.Time?.time,
        };
    });
}

export function mapConstructorResults({ RaceTable: { Races } }: any): ConstructorResultsRow[] {
    return Races.map(({ raceName, Results }: any) => ({
        raceName,
        driverResults: Results.map(({
            position,
            points,
            grid,
            laps,
            status,
            Time,
            FastestLap,
            Driver,
        }: any) => ({
            position,
            points,
            grid,
            laps,
            status,
            time: Time?.time,
            fastestLap: FastestLap?.Time?.time,
            driverName: getDriverFullName(Driver),
        })),
    }));
}

function mapRaceResults([{ Results }]: any[]): RaceResultsRow[] {
    return Results.map(({
        position,
        points,
        grid,
        laps,
        status,
        Time,
        Driver,
        Constructor,
    }: any) => ({
        position,
        driverName: getDriverFullName(Driver),
        driverNumber: Driver.permanentNumber,
        constructorName: Constructor.name,
        laps,
        grid,
        status,
        points,
        time: Time?.time,
    }));
}

function mapQualifyingResults([{ QualifyingResults }]: any[]): QualifyingResultsRow[] {
    return QualifyingResults.map(({
        position,
        Driver,
        Constructor,
        Q1,
        Q2,
        Q3,
    }: any) => ({
        position,
        driverName: getDriverFullName(Driver),
        driverNumber: Driver.permanentNumber,
        constructorName: Constructor.name,
        q1: Q1,
        q2: Q2,
        q3: Q3,
    }));
}

function mapPitStops([{ PitStops }]: any[]): PitStopRow[] {
    return PitStops.map(({
        driverId,
        lap,
        stop,
        time,
        duration,
    }: any) => ({
        driverId,
        lap,
        stop,
        time,
        duration,
    }));
}

export function mapRoundResults([RaceResults, QualifyingResults, PitStopResults]: any[]): RoundResults {
    return {
        Race: mapRaceResults(RaceResults.RaceTable.Races),
        Qualifying: mapQualifyingResults(QualifyingResults.RaceTable.Races),
        PitStops: mapPitStops(PitStopResults.RaceTable.Races),
    };
}
