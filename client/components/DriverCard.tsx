import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Driver } from 'client/reducers/drivers';
import { getImageUrl } from 'client/utils/images';
import styles from 'client/components/DriverCard.less';
import teamBorders from 'client/styles/team-borders.less';
import teamColors from 'client/styles/team-colors.less';

function DriverCard({
    index,
    driver: {
        constructorId,
        givenName,
        familyName,
        permanentNumber,
        driverId,
        constructorName,
    },
}: DriverCardProps) {
    const [hovered, setHovered] = useState(false);
    return (
        <Link
            to={`/drivers/${driverId}`}
            onFocus={() => setHovered(true)}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onBlur={() => setHovered(false)}
            className={classNames(styles.root, hovered && teamBorders[constructorId])}
        >
            <div className={styles.header}>
                <div className={styles.index}>
                    {index + 1}
                </div>
                <div className={classNames(styles.name, teamBorders[constructorId])}>
                    {givenName}
                    <div className={styles.lastName}>
                        {familyName}
                    </div>
                </div>
            </div>
            <div className={styles.team}>
                {constructorName}
            </div>
            <div className={styles.body}>
                <div className={classNames(styles.number, teamColors[constructorId])}>
                    {permanentNumber}
                </div>
                <div className={styles.image}>
                    <img src={getImageUrl(driverId)} alt={familyName} />
                </div>
            </div>
        </Link>
    );
}

interface DriverCardProps {
    driver: Driver;
    index: number;
}

export default DriverCard;
