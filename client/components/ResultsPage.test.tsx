import React from 'react';
import ResultsPage from 'client/components/ResultsPage';
import { renderWithRedux } from 'client/testing/utils';
import '@testing-library/jest-dom/extend-expect';
import { getReduxState } from 'client/testing/testFactories';
import { RaceRow } from 'client/reducers/race';

jest.mock(
    'client/components/Race',
    () => ({ raceRow }: { raceRow: RaceRow }) => (
        <div>{raceRow.raceName}</div>
    ),
);

describe('<ResultsPage />', () => {
    const state = getReduxState();

    it('renders title', () => {
        const { queryByText } = renderWithRedux(<ResultsPage />, state);
        expect(queryByText('Results')).toBeInTheDocument();
    });

    it('renders race name', () => {
        const { queryByText } = renderWithRedux(<ResultsPage />, state);
        expect(queryByText('Austrian Grand Prix')).toBeInTheDocument();
    });
});
