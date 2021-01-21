import { useEffect, useState } from 'react';
import { fetchData } from 'server/utils';

function useFetch<T, P>({ url, mapData, shouldFetch = true }: UseFetchProps<T, P>) {
    const [data, setData] = useState<T>();
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if (shouldFetch && !fetching) {
            setFetching(true);
            const requestFn = Array.isArray(url) ? doMultipleRequests(url) : doSingleRequest(url);
            requestFn.then((res) => {
                setData(mapData ? mapData(res) : res);
            }).finally(() => {
                setFetching(false);
            });
        }
    }, [shouldFetch]);

    return {
        data,
        fetching,
    };
}

function doSingleRequest(url: string) {
    return fetchData(url, fetch as Fetch);
}

function doMultipleRequests(urls: string[]) {
    return Promise.all(urls.map((url) => fetchData(url, fetch as Fetch)));
}

interface UseFetchProps<T, P> {
    url: string | string[];
    shouldFetch?: boolean;
    mapData?: (data: P) => T;
}

export default useFetch;
