import React from 'react';
import { ConstructorStandingsRow } from 'client/reducers/constructorStandings';
import { useShallowSelector } from 'client/utils/redux';
import { PageState } from 'client/reducers';
import styles from 'client/styles/standings.less';
import classNames from 'classnames';
import teamBorders from 'client/styles/team-borders.less';
import { Link } from 'react-router-dom';
import { getImageUrl } from 'client/utils/images';

function ConstructorStandings({ constructorStandingsRow }: ConstructorStandingsProps) {
    const { constructorId, position, points } = constructorStandingsRow;
    const constructor = useShallowSelector(({ Constructors }: PageState) => (
        Constructors.find((c) => c.constructorId === constructorId)
    ));

    if (!constructor) {
        return null;
    }

    const { name } = constructor;
    return (
        <div className={classNames(styles.root, teamBorders[constructorId])}>
            <div className={styles.position}>{position}</div>
            <Link to={`/constructors/${constructorId}`} className={styles.name}>
                {name}
            </Link>
            <div className={styles.image}>
                <img src={getImageUrl(constructorId)} alt={name} />
            </div>
            <div className={styles.points}>{points}</div>
        </div>
    );
}

interface ConstructorStandingsProps {
    constructorStandingsRow: ConstructorStandingsRow
}

export default ConstructorStandings;
