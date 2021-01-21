import { useLocation } from 'react-router-dom';
import useScrollToTop from 'client/hooks/useScrollToTop';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';

jest.mock('react-router-dom');

describe('useScrollToTop', () => {
    (useLocation as jest.Mock) = jest.fn();
    window.scrollTo = jest.fn();

    it('scrolls to top', async () => {
        renderHook(() => useScrollToTop());
        await waitFor(() => {
            expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
        });
    });
});
