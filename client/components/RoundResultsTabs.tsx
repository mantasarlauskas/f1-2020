import React from 'react';
import RoundResultsTab from 'client/components/RoundResultsTab';
import { RoundResultsTableType } from 'client/components/RoundResultsTable';
import styles from 'client/components/RoundResultsTabs.less';

function RoundResultsTabs({ roundId }: RoundResultsTabsProps) {
    return (
        <div className={styles.root}>
            <div className={styles.tab}>
                <RoundResultsTab
                    title="Race"
                    roundId={roundId}
                    type={RoundResultsTableType.RACE}
                />
            </div>
            <div className={styles.tab}>
                <RoundResultsTab
                    title="Qualifying"
                    roundId={roundId}
                    type={RoundResultsTableType.QUALIFYING}
                />
            </div>
            <div className={styles.tab}>
                <RoundResultsTab
                    title="Pit stop summary"
                    roundId={roundId}
                    type={RoundResultsTableType.PIT_STOPS}
                />
            </div>
        </div>
    );
}

interface RoundResultsTabsProps {
    roundId: string;
}

export default RoundResultsTabs;
