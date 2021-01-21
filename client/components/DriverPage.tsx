import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { RouterParams } from 'client/utils/router';
import { PageState } from 'client/reducers';
import { useShallowSelector } from 'client/utils/redux';
import { getDriverFullName } from 'client/utils/driver';
import styles from 'client/components/DriverPage.less';
import { getImageUrl } from 'client/utils/images';
import InfoRow from 'client/components/InfoRow';
import EmptyPage from 'client/components/EmptyPage';
import teamBorders from 'client/styles/team-borders.less';
import DriverResultsTable from 'client/components/DriverResultsTable';

function DriverPage() {
    const { id } = useParams<RouterParams>();
    const [driver, driverStandings] = useShallowSelector(({
        Drivers,
        DriverStandings,
    }: PageState) => [
        Drivers.find(({ driverId }) => driverId === id),
        DriverStandings.find(({ driverId }) => driverId === id),
    ]);

    if (!driver || !driverStandings) {
        return <EmptyPage />;
    }

    const name = getDriverFullName(driver);
    const { permanentNumber, driverId, constructorName, nationality, dateOfBirth, url, constructorId } = driver;
    const { points, position, wins } = driverStandings;
    return (
        <div className={classNames(styles.root, teamBorders[constructorId])}>
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.number}>{permanentNumber}</div>
            <div className={styles.content}>
                <div className={styles.driverImage}>
                    <img src={getImageUrl(driverId)} alt={name} />
                </div>
                <div className={styles.info}>
                    <img className={styles.teamImage} src={getImageUrl(constructorId)} alt={constructorName} />
                    <InfoRow label="Team" value={constructorName} url={`/constructors/${constructorId}`} />
                    <InfoRow label="Nationality" value={nationality} />
                    <InfoRow label="Points" value={points} />
                    <InfoRow label="Wins" value={wins} />
                    <InfoRow label="Championship position" value={position} />
                    <InfoRow label="Date of birth" value={dateOfBirth} />
                    <a className={styles.url} href={url} rel="noreferrer" target="_blank">
                        Wiki page
                    </a>
                </div>
            </div>
            <DriverResultsTable driverId={id} />
        </div>
    );
}

export default DriverPage;
