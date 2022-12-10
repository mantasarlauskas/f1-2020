import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'client/components/InfoRow.less';

function InfoRow({ label, value, url }: InfoRowProps) {
    if (!value) {
        return null;
    }

    return (
        <div className={styles.root}>
            <div className={styles.label}>
                {label}
            </div>
            {url ? (
                <Link className={styles.value} to={url}>
                    {value}
                </Link>
            ) : (
                <div className={styles.value}>
                    {value}
                </div>
            )}
        </div>
    );
}

interface InfoRowProps {
    label: string;
    value?: string;
    url?: string
}

export default InfoRow;
