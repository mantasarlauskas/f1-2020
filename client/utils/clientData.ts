import { RaceResults, QualifyingResults, PitStops, PitStop } from 'f1-api-interfaces';
import { DriverResultsRow } from 'client/state/driverResults';
import { ConstructorResultsRow } from 'client/state/constructorResults';
import { getDriverFullName } from 'client/utils/driver';
import {
    QualifyingResultsRow,
    RaceResultsRow,
    RoundResults,
} from 'client/state/roundResults';

export function mapDriverResults(races: RaceResults[]): DriverResultsRow[] {
    return races.map(({ raceName, round, date, Results }) => {
        const [{ position, points, grid, laps, status, Constructor: { name }, Time, FastestLap }] = Results;
        return {
            roundId: round,
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

export function mapConstructorResults(races: RaceResults[]): ConstructorResultsRow[] {
    return races.map(({ raceName, round, Results }) => ({
        raceName,
        roundId: round,
        driverResults: Results.map(({
            position,
            points,
            grid,
            laps,
            status,
            Time,
            FastestLap,
            Driver,
        }) => ({
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

function mapRaceResults([{ Results: results }]: RaceResults[]): RaceResultsRow[] {
    return results.map(({
        position,
        points,
        grid,
        laps,
        status,
        Time,
        Driver,
        Constructor,
    }) => ({
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

function mapQualifyingResults([{ QualifyingResults: results }]: QualifyingResults[]): QualifyingResultsRow[] {
    return results.map(({
        position,
        Driver,
        Constructor,
        Q1,
        Q2,
        Q3,
    }) => ({
        position,
        driverName: getDriverFullName(Driver),
        driverNumber: Driver.permanentNumber,
        constructorName: Constructor.name,
        q1: Q1,
        q2: Q2,
        q3: Q3,
    }));
}

function mapPitStops([{ PitStops: results }]: PitStops[]): PitStop[] {
    return results;
}

export function mapRoundResults(
    [raceResults, qualifyingResults, pitStopResults]: [RaceResults[], QualifyingResults[], PitStops[]],
): RoundResults {
    return {
        Race: mapRaceResults(raceResults),
        Qualifying: mapQualifyingResults(qualifyingResults),
        PitStops: mapPitStops(pitStopResults),
    };
}
