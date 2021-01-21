import React from 'react';
import { Location } from 'history';
import { match, NavLink } from 'react-router-dom';
import styles from 'client/components/RoundResultsTab.less';
import { RoundResultsTableType } from 'client/components/RoundResultsTable';

function RoundResultsTab({ title, type, roundId }: RoundResultsTabProps) {
    const url = `/roundResults/${roundId}/${type}`;

    function isActive(x: match | null, { pathname }: Location) {
        if (type === RoundResultsTableType.RACE && pathname === `/roundResults/${roundId}`) {
            return true;
        }

        return pathname === url;
    }

    return (
        <NavLink
            activeClassName={styles.active}
            className={styles.root}
            to={url}
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
