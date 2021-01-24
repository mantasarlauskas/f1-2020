import { combineReducers } from 'redux';
import driversReducer, { Driver } from 'client/reducers/drivers';
import constructorsReducer, { Constructor } from 'client/reducers/constructors';
import driverStandingsReducer, { DriverStandingsRow } from 'client/reducers/driverStandings';
import constructorStandingsReducer, { ConstructorStandingsRow } from 'client/reducers/constructorStandings';
import raceReducer, { RaceRow } from 'client/reducers/race';
import driverResultsReducer, { DriverResultsState } from 'client/reducers/driverResults';
import constructorResultsReducer, { ConstructorResultsState } from 'client/reducers/constructorResults';
import roundResultsReducer, { RoundResultsState } from 'client/reducers/roundResults';

export default combineReducers<PageState>({
    Drivers: driversReducer,
    Constructors: constructorsReducer,
    DriverStandings: driverStandingsReducer,
    ConstructorStandings: constructorStandingsReducer,
    Schedule: raceReducer,
    DriverResults: driverResultsReducer,
    ConstructorResults: constructorResultsReducer,
    RoundResults: roundResultsReducer,
    Results: raceReducer,
});

export interface PageState extends InitialPageState {
    DriverResults: DriverResultsState,
    ConstructorResults: ConstructorResultsState,
    RoundResults: RoundResultsState,
}

export interface InitialPageState {
    Drivers: Driver[],
    Constructors: Constructor[],
    DriverStandings: DriverStandingsRow[],
    ConstructorStandings: ConstructorStandingsRow[],
    Schedule: RaceRow[],
    Results: RaceRow[],
}
