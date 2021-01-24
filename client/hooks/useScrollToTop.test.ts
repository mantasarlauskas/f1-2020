import useScrollToTop from 'client/hooks/useScrollToTop';
import { renderHookWithRouter } from 'client/testing/utils';

describe('useScrollToTop', () => {
    window.scrollTo = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('does not scroll to top when prev route is same results page', () => {
        renderHookWithRouter(() => useScrollToTop(), {
            url: '/results/12/race',
            state: {
                id: '12',
                prevPath: '/results/12/qualifying',
            },
        });

        expect(window.scrollTo).not.toBeCalled();
    });

    it('scrolls to top', () => {
        renderHookWithRouter(() => useScrollToTop(), {
            url: '/results/13/race',
            state: {
                id: '12',
                prevPath: '/results/12/qualifying',
            },
        });

        expect(window.scrollTo).toBeCalled();
    });
});
