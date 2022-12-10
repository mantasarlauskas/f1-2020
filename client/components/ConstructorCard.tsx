import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from 'client/components/ConstructorCard.less';
import teamBorders from 'client/styles/team-borders.less';
import { getImageUrl } from 'client/utils/images';
import { Constructor } from 'f1-api-interfaces';

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
            <img className={styles.image} src={getImageUrl(constructorId, 500)} alt={name} />
        </Link>
    );
}

interface ConstructorCardProps {
    constructorInfo: Constructor
}

export default ConstructorCard;
