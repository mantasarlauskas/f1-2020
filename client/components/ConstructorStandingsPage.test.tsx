import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { getReduxState } from 'client/testing/testFactories';
import ConstructorStandingsPage from 'client/components/ConstructorStandingsPage';
import { renderWithRedux } from 'client/testing/utils';

jest.mock('client/components/ConstructorStandings', () => () => <span>ConstructorStandings</span>);

describe('<ConstructorStandingsPage />', () => {
    const state = getReduxState();

    it('renders title', () => {
        const { queryByText } = renderWithRedux(<ConstructorStandingsPage />, state);
        expect(queryByText('Constructor standings')).toBeInTheDocument();
    });

    it('renders 1 standings card', () => {
        const { getAllByText } = renderWithRedux(<ConstructorStandingsPage />, state);
        expect(getAllByText('ConstructorStandings').length).toEqual(1);
    });
});
