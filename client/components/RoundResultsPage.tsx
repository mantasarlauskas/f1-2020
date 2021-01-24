import React from 'react';
import { useParams } from 'react-router-dom';
import { RouterParams } from 'client/utils/router';
import { useSelector } from 'react-redux';
import { PageState } from 'client/reducers';
import EmptyPage from 'client/components/EmptyPage';
import styles from 'client/components/RoundResultsPage.less';
import RoundResultsTable from 'client/components/RoundResultsTable';
import RoundResultsTabs from 'client/components/RoundResultsTabs';
import CircuitInfo from 'client/components/CircuitInfo';

function RoundResultsPage() {
    const { id } = useParams<RouterParams>();
    const raceRow = useSelector((state: PageState) => (
        state.Results.find(({ round }) => round === id)
    ));

    if (!raceRow) {
        return <EmptyPage />;
    }

    const { round, Circuit, raceName, date } = raceRow;
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {`Round ${round} results`}
            </div>
            <CircuitInfo
                raceName={raceName}
                circuit={Circuit}
                date={date}
            />
            <div className={styles.tabs}>
                <RoundResultsTabs roundId={id} />
            </div>
            <RoundResultsTable roundId={id} />
        </div>
    );
}

export default RoundResultsPage;
