import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { PageState } from 'client/reducers';
import { DriverStandingsRow } from 'client/reducers/driverStandings';
import styles from 'client/styles/standings.less';
import teamBorders from 'client/styles/team-borders.less';
import { getDriverFullName } from 'client/utils/driver';
import { getImageUrl } from 'client/utils/images';
import { useShallowSelector } from 'client/utils/redux';

function DriverStandings({ driverStandingsRow }: DriverStandingsProps) {
    const { constructorId, position, driverId, points } = driverStandingsRow;
    const { constructor, driver } = useShallowSelector(({ Constructors, Drivers }: PageState) => ({
        constructor: Constructors.find((c) => c.constructorId === constructorId),
        driver: Drivers.find((d) => d.driverId === driverId),
    }));

    if (!constructor || !driver) {
        return null;
    }

    const { name } = constructor;
    return (
        <div className={classNames(styles.root, teamBorders[constructorId])}>
            <div className={styles.position}>{position}</div>
            <Link to={`/drivers/${driverId}`} className={styles.name}>
                {getDriverFullName(driver)}
            </Link>
            <Link to={`/constructors/${constructorId}`} className={styles.team}>
                {name}
            </Link>
            <div className={styles.image}>
                <img src={getImageUrl(constructorId)} alt={name} />
            </div>
            <div className={styles.points}>{points}</div>
        </div>
    );
}

interface DriverStandingsProps {
    driverStandingsRow: DriverStandingsRow
}

export default DriverStandings;
