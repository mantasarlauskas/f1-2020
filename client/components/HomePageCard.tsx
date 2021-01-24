import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'client/components/HomePageCard.less';
import { RouteType } from 'client/utils/router';

function HomePageCard({ type, url }: HomePageCardProps) {
    return (
        <Link to={url} className={styles.root}>
            <div className={styles.text}>
                {type}
            </div>
        </Link>
    );
}

interface HomePageCardProps {
    type: RouteType;
    url: string;
}

export default HomePageCard;
