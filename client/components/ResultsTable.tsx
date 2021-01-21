import React, { ReactNode } from 'react';
import styles from 'client/components/ResultsTable.less';

function ResultsTable({ title, head, children }: ResultsTableProps) {
    return (
        <div className={styles.root}>
            {title && (
                <div className={styles.title}>
                    {title}
                </div>
            )}
            <div className={styles.table}>
                <table>
                    <thead>
                        {head}
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

interface ResultsTableProps {
    title?: string;
    head: ReactNode;
    children: ReactNode;
}

export default ResultsTable;
