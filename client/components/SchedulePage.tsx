import React from 'react';
import ListPage from 'client/components/ListPage';
import { useSelector } from 'react-redux';
import { PageState } from 'client/reducers';
import Schedule from 'client/components/Schedule';
import styles from 'client/components/SchedulePage.less';

function SchedulePage() {
    const schedule = useSelector((state: PageState) => state.Schedule);
    return (
        <ListPage title="Schedule">
            {schedule.map((scheduleRow) => (
                <div className={styles.schedule} key={scheduleRow.round}>
                    <Schedule scheduleRow={scheduleRow} />
                </div>
            ))}
        </ListPage>
    );
}

export default SchedulePage;
