import emptyReducer from 'client/reducers/empty';

export default emptyReducer;

export interface DriverStandingsRow {
    constructorId: string;
    driverId: string;
    points: string;
    position: string;
    positionText: string;
    wins: string;
}
