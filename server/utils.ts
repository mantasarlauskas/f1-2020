export async function fetchData(data: string, fetchFn: Fetch, year = '2020') {
    const { MRData } = await fetchFn(
        `https://ergast.com/api/f1/${year}${data ? `/${data}` : ''}.json`,
        { method: 'Get' },
    ).then((res: Response) => res.json());
    return MRData;
}
