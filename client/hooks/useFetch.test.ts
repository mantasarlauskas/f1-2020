import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useFetch from 'client/hooks/useFetch';
import { fetchData } from 'server/utils';
import { getConstructor } from 'client/testing/testFactories';

jest.mock('server/utils');

describe('useFetch', () => {
    const response = getConstructor();
    (fetchData as jest.Mock) = jest.fn().mockResolvedValue(response);
    window.fetch = jest.fn();
    const props = {
        url: '/url',
        shouldFetch: true,
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('does request and returns data', async () => {
        const { result } = renderHook(() => useFetch(props));
        await waitFor(() => {
            expect(fetchData).toHaveBeenCalledWith('/url', expect.anything());
            expect(result.current.data).toEqual(response);
        });
    });

    it('returns correct fetching values', async () => {
        const { result } = renderHook(() => useFetch(props));
        expect(result.current.fetching).toEqual(true);
        await waitFor(() => {
            expect(result.current.fetching).toEqual(false);
        });
    });
});
