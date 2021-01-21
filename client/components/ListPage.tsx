import React, { ReactNode } from 'react';
import styles from 'client/components/ListPage.less';

function ListPage({ title, children }: ListPageProps) {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.list}>
                {children}
            </div>
        </div>
    );
}

interface ListPageProps {
    title: string;
    children: ReactNode;
}

export default ListPage;
