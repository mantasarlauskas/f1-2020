import emptyReducer from 'client/reducers/empty';

export default emptyReducer;

export interface Driver {
    driverId: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
    permanentNumber: string;
    constructorId: string;
    constructorName: string;
}
