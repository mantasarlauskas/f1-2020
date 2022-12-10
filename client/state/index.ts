import { Constructor, RaceInfo } from 'f1-api-interfaces';
import { combineReducers } from 'redux';
import { DriverInformation } from 'client/state/drivers';
import { DriverStandingsRow } from 'client/state/driverStandings';
import { ConstructorStandingsRow } from 'client/state/constructorStandings';
import driverResultsReducer, { DriverResultsState } from 'client/state/driverResults';
import constructorResultsReducer, { ConstructorResultsState } from 'client/state/constructorResults';
import roundResultsReducer, { RoundResultsState } from 'client/state/roundResults';
import emptyReducer from 'client/state/empty';

export default combineReducers<PageState>({
    Drivers: emptyReducer,
    Constructors: emptyReducer,
    DriverStandings: emptyReducer,
    ConstructorStandings: emptyReducer,
    Schedule: emptyReducer,
    Results: emptyReducer,
    DriverResults: driverResultsReducer,
    ConstructorResults: constructorResultsReducer,
    RoundResults: roundResultsReducer,
});

export interface PageState extends InitialPageState {
    DriverResults: DriverResultsState,
    ConstructorResults: ConstructorResultsState,
    RoundResults: RoundResultsState,
}

export interface InitialPageState {
    Drivers: DriverInformation[],
    Constructors: Constructor[],
    DriverStandings: DriverStandingsRow[],
    ConstructorStandings: ConstructorStandingsRow[],
    Schedule: RaceInfo[],
    Results: RaceInfo[],
}
