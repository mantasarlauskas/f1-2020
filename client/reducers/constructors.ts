import emptyReducer from 'client/reducers/empty';

export default emptyReducer;

export interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}
