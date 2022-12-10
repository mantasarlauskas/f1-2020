import React from 'react';
import ListPage from 'client/components/ListPage';
import { useSelector } from 'react-redux';
import { PageState } from 'client/state';
import Race from 'client/components/Race';
import styles from 'client/components/SchedulePage.less';

function SchedulePage() {
    const schedule = useSelector((state: PageState) => state.Schedule);
    return (
        <ListPage title="Schedule">
            {schedule.map((raceRow) => (
                <div className={styles.race} key={raceRow.round}>
                    <Race raceRow={raceRow} />
                </div>
            ))}
        </ListPage>
    );
}

export default SchedulePage;
