import React from 'react';
import { useSelector } from 'react-redux';
import { PageState } from 'client/state';
import Race from 'client/components/Race';
import ListPage from 'client/components/ListPage';
import styles from 'client/components/ResultsPage.less';

function ResultsPage() {
    const results = useSelector((state: PageState) => state.Results);
    return (
        <ListPage title="Results">
            {results.map((raceRow) => (
                <div className={styles.race} key={raceRow.round}>
                    <Race raceRow={raceRow} showResultsButton />
                </div>
            ))}
        </ListPage>
    );
}

export default ResultsPage;
