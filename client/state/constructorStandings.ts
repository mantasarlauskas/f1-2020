import { StandingsInfo } from 'f1-api-interfaces';

export interface ConstructorStandingsRow extends StandingsInfo {
    constructorId: string;
}
