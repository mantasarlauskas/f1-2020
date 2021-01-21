import React from 'react';
import { useSelector } from 'react-redux';
import { PageState } from 'client/reducers';
import styles from 'client/components/DriversPage.less';
import DriverCard from 'client/components/DriverCard';
import ListPage from 'client/components/ListPage';

function DriversPage() {
    const drivers = useSelector((state: PageState) => state.Drivers);
    return (
        <ListPage title="Drivers">
            {drivers.map((driver, index) => (
                <div className={styles.driver} key={driver.driverId}>
                    <DriverCard driver={driver} index={index} />
                </div>
            ))}
        </ListPage>
    );
}

export default DriversPage;
