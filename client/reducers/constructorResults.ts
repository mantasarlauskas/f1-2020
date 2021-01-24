const ADD_CONSTRUCTOR_RESULTS = 'ADD_CONSTRUCTOR_RESULTS';

export default function constructorResultsReducer(
    state: ConstructorResultsState = {},
    action: AddConstructorAction,
): ConstructorResultsState {
    switch (action.type) {
        case ADD_CONSTRUCTOR_RESULTS:
            return {
                ...state,
                [action.payload.constructorId]: action.payload.constructorResults,
            };
        default:
            return state;
    }
}

export function addConstructorResults(
    constructorId: string,
    constructorResults: ConstructorResultsRow[],
): AddConstructorAction {
    return {
        type: ADD_CONSTRUCTOR_RESULTS,
        payload: {
            constructorId,
            constructorResults,
        },
    };
}

interface AddConstructorAction {
    type: typeof ADD_CONSTRUCTOR_RESULTS
    payload: { constructorId: string; constructorResults: ConstructorResultsRow[] }
}

export interface ConstructorResultsRow {
    raceName: string;
    roundId: string;
    driverResults: ConstructorDriverResults[];
}

interface ConstructorDriverResults {
    driverName: string;
    position: string;
    points: string;
    grid: string;
    laps: string;
    status: string;
    fastestLap?: string;
    time?: string;
}

export interface ConstructorResultsState {
    [key: string]: ConstructorResultsRow[]
}
