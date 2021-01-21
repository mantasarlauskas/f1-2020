import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { navigationRoutes } from 'client/utils/router';
import MenuSvg from 'client/assets/menu.svg';
import styles from 'client/components/Navigation.less';

function Navigation() {
    const [responsiveVisible, setResponsiveVisible] = useState(false);
    return (
        <div className={styles.navigation}>
            <MenuSvg className={styles.icon} onClick={() => setResponsiveVisible(!responsiveVisible)} />
            <div className={classNames(styles.items, { [styles.responsiveVisible]: responsiveVisible })}>
                {navigationRoutes.map(({ type, url }) => (
                    <NavLink
                        to={url}
                        key={url}
                        className={styles.item}
                        activeClassName={styles.active}
                        onClick={() => setResponsiveVisible(false)}
                    >
                        {type}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Navigation;
