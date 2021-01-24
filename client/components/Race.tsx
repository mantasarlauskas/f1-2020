import React from 'react';
import { Link } from 'react-router-dom';
import { RaceRow } from 'client/reducers/race';
import styles from 'client/components/Race.less';

function Race({ raceRow, showResultsButton }: RaceProps) {
    const { round, raceName, date, Circuit: { circuitName } } = raceRow;
    return (
        <div className={styles.root}>
            <div className={styles.round}>
                {round}
            </div>
            <div className={styles.raceName}>
                {raceName}
            </div>
            <div className={styles.circuitName}>
                {circuitName}
            </div>
            <div className={styles.date}>
                {date}
            </div>
            {showResultsButton && (
                <Link className={styles.results} to={`/results/${round}`}>
                    <div className={styles.button}>
                        Results
                    </div>
                </Link>
            )}
        </div>
    );
}

interface RaceProps {
    raceRow: RaceRow;
    showResultsButton?: boolean;
}

export default Race;
