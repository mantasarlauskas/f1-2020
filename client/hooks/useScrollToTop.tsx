import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocationState } from 'client/utils/router';

function useScrollToTop() {
    const location = useLocation<LocationState | null>();

    useEffect(() => {
        const { state, pathname } = location;
        const { prevPath, id } = state || {};
        const matchUrl = `/results/${id}`;
        if (!prevPath?.includes(matchUrl) || !pathname.includes(matchUrl)) {
            window.scrollTo(0, 0);
        }
    }, [location]);
}

export default useScrollToTop;
