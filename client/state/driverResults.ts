const ADD_DRIVER_RESULTS = 'ADD_DRIVER_RESULTS';

export default function driverResultsReducer(
    state: DriverResultsState = {},
    action: AddDriverAction,
): DriverResultsState {
    switch (action.type) {
        case ADD_DRIVER_RESULTS:
            return {
                ...state,
                [action.payload.driverId]: action.payload.driverResults,
            };
        default:
            return state;
    }
}

export function addDriverResults(driverId: string, driverResults: DriverResultsRow[]): AddDriverAction {
    return {
        type: ADD_DRIVER_RESULTS,
        payload: {
            driverId,
            driverResults,
        },
    };
}

interface AddDriverAction {
    type: typeof ADD_DRIVER_RESULTS
    payload: { driverId: string; driverResults: DriverResultsRow[] }
}

export interface DriverResultsRow {
    roundId: string;
    raceName: string;
    date: string;
    position: string;
    constructorName: string;
    points: string;
    grid: string;
    laps: string;
    status: string;
    fastestLap?: string;
    time?: string;
}

export interface DriverResultsState {
    [key: string]: DriverResultsRow[]
}
