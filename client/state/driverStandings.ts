import { StandingsInfo } from 'f1-api-interfaces';

export interface DriverStandingsRow extends StandingsInfo {
    constructorId: string;
    driverId: string;
}
