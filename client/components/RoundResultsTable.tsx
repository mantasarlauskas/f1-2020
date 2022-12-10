import React, { useEffect } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PageState } from 'client/state';
import useFetch from 'client/hooks/useFetch';
import { mapRoundResults } from 'client/utils/clientData';
import Loader from 'client/components/Loader';
import { addRoundResults } from 'client/state/roundResults';
import RaceResultsTable from 'client/components/RaceResultsTable';
import QualifyingResultsTable from 'client/components/QualifyingResultsTable';
import PitStopsTable from 'client/components/PitStopsTable';

export enum RoundResultsTableType {
    RACE = 'race',
    QUALIFYING = 'qualifying',
    PIT_STOPS = 'pitstops'
}

function RoundResultsTable({ roundId, match: { path } }: RoundResultsTableProps) {
    const dispatch = useDispatch();
    const results = useSelector((state: PageState) => state.RoundResults?.[roundId]);
    const { fetching, data } = useFetch({
        url: [`${roundId}/results`, `${roundId}/qualifying`, `${roundId}/pitstops`],
        shouldFetch: !results,
        mapData: mapRoundResults,
    });

    useEffect(() => {
        if (data) {
            dispatch(addRoundResults(roundId, data));
        }
    }, [dispatch, roundId, data]);

    if (fetching) {
        return <Loader />;
    }

    if (!results) {
        return null;
    }

    return (
        <Switch>
            <Route
                exact
                path={`${path}/${RoundResultsTableType.QUALIFYING}`}
                component={() => <QualifyingResultsTable roundId={roundId} />}
            />
            <Route
                exact
                path={`${path}/${RoundResultsTableType.PIT_STOPS}`}
                component={() => <PitStopsTable roundId={roundId} />}
            />
            <Route
                path={`${path}/(${RoundResultsTableType.RACE})?`}
                component={() => <RaceResultsTable roundId={roundId} />}
            />
        </Switch>
    );
}

interface RoundResultsTableProps extends RouteComponentProps {
    roundId: string;
}

export default withRouter(RoundResultsTable);
