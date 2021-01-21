import emptyReducer from 'client/reducers/empty';

export default emptyReducer;

export interface ScheduleRow {
    season: string;
    round: string;
    url: string;
    raceName: string;
    date: string;
    time: string;
    Circuit: Circuit;
}

interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}
