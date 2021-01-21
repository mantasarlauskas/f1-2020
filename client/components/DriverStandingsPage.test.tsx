import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { getReduxState } from 'client/testing/testFactories';
import DriverStandingsPage from 'client/components/DriverStandingsPage';
import { renderWithRedux } from 'client/testing/utils';

jest.mock('client/components/DriverStandings', () => () => <span>DriverStandings</span>);

describe('<DriverStandingsPage />', () => {
    const state = getReduxState();

    it('renders title', () => {
        const { queryByText } = renderWithRedux(<DriverStandingsPage />, state);
        expect(queryByText('Driver standings')).toBeInTheDocument();
    });

    it('renders 1 standings card', () => {
        const { getAllByText } = renderWithRedux(<DriverStandingsPage />, state);
        expect(getAllByText('DriverStandings').length).toEqual(1);
    });
});
