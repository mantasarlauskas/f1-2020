import { useEffect, useState } from 'react';
import { fetchData } from 'server/utils';

function useFetch<T, P = T>({ url, mapData, shouldFetch = true }: UseFetchProps<T, P>) {
    const [data, setData] = useState<T>();
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if (shouldFetch && !fetching) {
            setFetching(true);
            const requestFn = Array.isArray(url) ? doMultipleRequests<P>(url) : doSingleRequest<P>(url);
            requestFn.then((res) => {
                setData(mapData ? mapData(res) : res as any as T);
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

function doSingleRequest<T>(url: string) {
    return fetchData<T>(url, fetch as Fetch);
}

function doMultipleRequests<T>(urls: string[]) {
    return Promise.all(urls.map((url) => fetchData(url, fetch as Fetch))) as any as Promise<T>;
}

interface UseFetchProps<T, P> {
    url: string | string[];
    shouldFetch?: boolean;
    mapData?: (data: P) => T;
}

export default useFetch;
