export async function fetchData(data: string, fetchFn: Fetch) {
    const { MRData } = await fetchFn(`http://ergast.com/api/f1/2020${data ? `/${data}` : ''}.json`, { method: 'Get' })
        .then((res: Response) => res.json());
    return MRData;
}
