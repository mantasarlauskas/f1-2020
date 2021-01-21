import React from 'react';
import styles from 'client/components/EmptyPage.less';

function EmptyPage() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>Oops!</div>
            <div className={styles.message}>
                We can&lsquo;t seem to find the page you&lsquo;re looking for.
            </div>
            <div className={styles.code}>
                404
            </div>
        </div>
    );
}

export default EmptyPage;
