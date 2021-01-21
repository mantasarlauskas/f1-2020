import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Constructor } from 'client/reducers/constructors';
import styles from 'client/components/ConstructorCard.less';
import teamBorders from 'client/styles/team-borders.less';
import { getImageUrl } from 'client/utils/images';

function ConstructorCard({ constructorInfo: { name, constructorId } }: ConstructorCardProps) {
    const [hovered, setHovered] = useState(false);
    return (
        <Link
            onFocus={() => setHovered(true)}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onBlur={() => setHovered(false)}
            to={`/constructors/${constructorId}`}
            className={classNames(styles.root, hovered && teamBorders[constructorId])}
        >
            <div className={classNames(styles.name, teamBorders[constructorId])}>
                {name}
            </div>
            <img className={styles.image} src={getImageUrl(constructorId)} alt={name} />
        </Link>
    );
}

interface ConstructorCardProps {
    constructorInfo: Constructor
}

export default ConstructorCard;
