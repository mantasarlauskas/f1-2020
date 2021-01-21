import React from 'react';
import ListPage from 'client/components/ListPage';
import { useSelector } from 'react-redux';
import { PageState } from 'client/reducers';
import DriverStandings from 'client/components/DriverStandings';
import styles from 'client/components/DriverStandingsPage.less';

function DriverStandingsPage() {
    const standings = useSelector((state: PageState) => state.DriverStandings);
    return (
        <ListPage title="Driver standings">
            {standings.map((driverStandingsRow) => (
                <div key={driverStandingsRow.driverId} className={styles.standings}>
                    <DriverStandings driverStandingsRow={driverStandingsRow} />
                </div>
            ))}
        </ListPage>
    );
}

export default DriverStandingsPage;
