export async function fetchData<T>(data: string, fetchFn: Fetch, year = '2020'): Promise<T> {
    return fetchFn(
        `http://localhost:3000/${year}${data ? `/${data}` : ''}`,
        { method: 'Get' },
    ).then<T>((res: Response) => res.json());
}
