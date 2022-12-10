import React from 'react';
import classNames from 'classnames';
import { useParams, Link } from 'react-router-dom';
import { RouterParams } from 'client/utils/router';
import { useShallowSelector } from 'client/utils/redux';
import { PageState } from 'client/state';
import EmptyPage from 'client/components/EmptyPage';
import styles from 'client/components/ConstructorPage.less';
import teamBorders from 'client/styles/team-borders.less';
import { getImageUrl } from 'client/utils/images';
import InfoRow from 'client/components/InfoRow';
import { getDriverFullName } from 'client/utils/driver';
import ConstructorResultsTable from 'client/components/ConstructorResultsTable';

function ConstructorPage() {
    const { id } = useParams<RouterParams>();
    const drivers = useShallowSelector(({ Drivers }: PageState) => (
        Drivers.filter(({ constructorId }) => constructorId === id)
    ));

    const [constructor, constructorStandings] = useShallowSelector(({
        Constructors,
        ConstructorStandings,
    }: PageState) => [
        Constructors.find(({ constructorId }) => constructorId === id),
        ConstructorStandings.find(({ constructorId }) => constructorId === id),
    ]);

    if (!constructor || !constructorStandings) {
        return <EmptyPage />;
    }

    const { constructorId, name, nationality, url } = constructor;
    const { points, position, wins } = constructorStandings;
    return (
        <div className={classNames(styles.root, teamBorders[constructorId])}>
            <h1 className={styles.name}>
                {name}
            </h1>
            <div className={styles.content}>
                <div className={styles.info}>
                    <img className={styles.teamImage} src={getImageUrl(constructorId, 500)} alt={name} />
                    <InfoRow label="Nationality" value={nationality} />
                    <InfoRow label="Points" value={points} />
                    <InfoRow label="Wins" value={wins} />
                    <InfoRow label="Championship position" value={position} />
                    <a className={styles.url} href={url} rel="noreferrer" target="_blank">
                        Wiki page
                    </a>
                </div>
                {drivers.map((driver) => (
                    <Link to={`/drivers/${driver.driverId}`} className={styles.driver} key={driver.driverId}>
                        <img
                            className={styles.driverImage}
                            src={getImageUrl(driver.driverId)}
                            alt={getDriverFullName(driver)}
                        />
                        <div className={styles.driverNumber}>
                            {driver.permanentNumber}
                        </div>
                        <div className={styles.driverName}>
                            {getDriverFullName(driver)}
                        </div>
                    </Link>
                ))}
            </div>
            <ConstructorResultsTable constructorId={id} />
        </div>
    );
}

export default ConstructorPage;
