import React from 'react';
import RoundResultsPage from 'client/components/RoundResultsPage';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouterAndRedux } from 'client/testing/utils';
import { getReduxState } from 'client/testing/testFactories';

jest.mock('client/components/RoundResultsTable', () => () => <span>RoundResultsTable</span>);
jest.mock('client/components/RoundResultsTabs', () => () => <span>RoundResultsTabs</span>);
jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
}));

describe('<RoundResultsPage />', () => {
    const state = getReduxState();

    it('renders empty page when round data does not exist', () => {
        const { queryByText } = renderWithRouterAndRedux(<RoundResultsPage />, state, {
            path: '/results/:id',
            url: '/results/2',
        });

        expect(queryByText('404')).toBeInTheDocument();
    });

    it('renders round results page', () => {
        const { queryByText } = renderWithRouterAndRedux(<RoundResultsPage />, state, {
            path: '/results/:id',
            url: '/results/1',
        });

        expect(queryByText('RoundResultsTable')).toBeInTheDocument();
        expect(queryByText('RoundResultsTabs')).toBeInTheDocument();
        expect(queryByText('Round 1 results')).toBeInTheDocument();
    });
});
