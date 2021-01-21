const ADD_ROUND_RESULTS = 'ADD_ROUND_RESULTS';

export default function roundResultsReducer(
    state: RoundResultsState = {},
    action: AddRoundAction,
): RoundResultsState {
    switch (action.type) {
        case ADD_ROUND_RESULTS:
            return {
                ...state,
                [action.payload.roundId]: action.payload.roundResults,
            };
        default:
            return state;
    }
}

export function addRoundResults(
    roundId: string,
    roundResults: RoundResults,
): AddRoundAction {
    return {
        type: ADD_ROUND_RESULTS,
        payload: {
            roundId,
            roundResults,
        },
    };
}

interface AddRoundAction {
    type: typeof ADD_ROUND_RESULTS
    payload: { roundId: string; roundResults: RoundResults }
}

export interface RaceResultsRow {
    driverName: string;
    driverNumber: string;
    constructorName: string;
    position: string;
    points: string;
    grid: string;
    laps: string;
    status: string;
    time?: string;
}

export interface QualifyingResultsRow {
    position: string;
    driverName: string;
    driverNumber: string;
    constructorName: string;
    q1?: string;
    q2?: string;
    q3?: string;
}

export interface PitStopRow {
    driverId: string;
    lap: string;
    stop: string;
    time: string;
    duration: string;
}

export interface RoundResults {
    Race: RaceResultsRow[];
    Qualifying: QualifyingResultsRow[];
    PitStops: PitStopRow[];
}

export interface RoundResultsState {
    [key: string]: RoundResults;
}
