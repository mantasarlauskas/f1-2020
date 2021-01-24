import React from 'react';
import { Location } from 'history';
import { match, NavLink, useLocation } from 'react-router-dom';
import styles from 'client/components/RoundResultsTab.less';
import { RoundResultsTableType } from 'client/components/RoundResultsTable';

function RoundResultsTab({ title, type, roundId }: RoundResultsTabProps) {
    const location = useLocation();
    const url = `/results/${roundId}/${type}`;

    function isActive(x: match | null, { pathname }: Location) {
        if (type === RoundResultsTableType.RACE && pathname === `/results/${roundId}`) {
            return true;
        }

        return pathname === url;
    }

    return (
        <NavLink
            activeClassName={styles.active}
            className={styles.root}
            to={{
                pathname: url,
                state: { prevPath: location.pathname, id: roundId },
            }}
            isActive={isActive}
        >
            {title}
        </NavLink>
    );
}

interface RoundResultsTabProps {
    title: string;
    roundId: string;
    type: RoundResultsTableType;
}

export default RoundResultsTab;
