import React from 'react';
import styles from 'client/components/Loader.less';

function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles.circle} />
        </div>
    );
}

export default Loader;
