import emptyReducer from 'client/reducers/empty';

export default emptyReducer;

export interface ConstructorStandingsRow {
    constructorId: string;
    points: string;
    position: string;
    positionText: string;
    wins: string;
}
