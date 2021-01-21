import React from 'react';
import ListPage from 'client/components/ListPage';
import { useSelector } from 'react-redux';
import { PageState } from 'client/reducers';
import styles from 'client/components/DriverStandingsPage.less';
import ConstructorStandings from 'client/components/ConstructorStandings';

function ConstructorStandingsPage() {
    const standings = useSelector((state: PageState) => state.ConstructorStandings);
    return (
        <ListPage title="Constructor standings">
            {standings.map((constructorStandingsRow) => (
                <div key={constructorStandingsRow.constructorId} className={styles.standings}>
                    <ConstructorStandings constructorStandingsRow={constructorStandingsRow} />
                </div>
            ))}
        </ListPage>
    );
}

export default ConstructorStandingsPage;
