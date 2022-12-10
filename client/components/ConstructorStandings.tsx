import React from 'react';
import { useSelector } from 'react-redux';
import { ConstructorStandingsRow } from 'client/state/constructorStandings';
import { PageState } from 'client/state';
import styles from 'client/styles/standings.less';
import classNames from 'classnames';
import teamBorders from 'client/styles/team-borders.less';
import { Link } from 'react-router-dom';
import { getImageUrl } from 'client/utils/images';

function ConstructorStandings({ constructorStandingsRow }: ConstructorStandingsProps) {
    const { constructorId, position, points } = constructorStandingsRow;
    const constructor = useSelector(({ Constructors }: PageState) => (
        Constructors.find((c) => c.constructorId === constructorId)
    ));

    if (!constructor) {
        return null;
    }

    const { name } = constructor;
    return (
        <Link
            to={`/constructors/${constructorId}`}
            className={classNames(styles.root, teamBorders[constructorId])}
        >
            <div className={styles.position}>{position}</div>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.image}>
                <img src={getImageUrl(constructorId, 300)} alt={name} />
            </div>
            <div className={styles.points}>{points}</div>
        </Link>
    );
}

interface ConstructorStandingsProps {
    constructorStandingsRow: ConstructorStandingsRow
}

export default ConstructorStandings;
