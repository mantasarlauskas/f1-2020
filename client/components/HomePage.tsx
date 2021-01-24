import React from 'react';
import { getImageUrl } from 'client/utils/images';
import styles from 'client/components/HomePage.less';
import HomePageCard from 'client/components/HomePageCard';
import { navigationRoutes } from 'client/utils/router';

function HomePage() {
    return (
        <div className={styles.root}>
            <div className={styles.image}>
                <div className={styles.title}>
                    F1 stats
                </div>
                <img src={getImageUrl('background')} alt="Home" />
            </div>
            <div className={styles.cards}>
                {navigationRoutes.slice(1).map(({ type, url }) => (
                    <div className={styles.card} key={url}>
                        <HomePageCard type={type} url={url} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
