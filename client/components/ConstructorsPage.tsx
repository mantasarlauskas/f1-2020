import React from 'react';
import ListPage from 'client/components/ListPage';
import { useSelector } from 'react-redux';
import { PageState } from 'client/state';
import ConstructorCard from 'client/components/ConstructorCard';
import styles from 'client/components/ConstructorsPage.less';

function ConstructorsPage() {
    const constructors = useSelector((state: PageState) => state.Constructors);
    return (
        <ListPage title="Constructors">
            {constructors.map((constructor) => (
                <div key={constructor.constructorId} className={styles.constructorCard}>
                    <ConstructorCard constructorInfo={constructor} />
                </div>
            ))}
        </ListPage>
    );
}

export default ConstructorsPage;
