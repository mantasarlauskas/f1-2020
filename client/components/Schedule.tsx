import React from 'react';
import { Link } from 'react-router-dom';
import { ScheduleRow } from 'client/reducers/schedule';
import styles from 'client/components/Schedule.less';

function Schedule({ scheduleRow }: ScheduleProps) {
    const { round, raceName, date, Circuit: { circuitName } } = scheduleRow;
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
            <Link className={styles.results} to={`/roundResults/${round}`}>
                <div className={styles.button}>
                    Results
                </div>
            </Link>
        </div>
    );
}

interface ScheduleProps {
    scheduleRow: ScheduleRow;
}

export default Schedule;
