import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import DriverPage from 'client/components/DriverPage';
import { renderWithRouterAndRedux } from 'client/testing/utils';
import { getReduxState } from 'client/testing/testFactories';

jest.mock('client/components/DriverResultsTable', () => () => <span />);

describe('<DriverPage />', () => {
    const state = getReduxState();

    it('returns empty page when driver id is invalid', () => {
        const { queryByText } = renderWithRouterAndRedux(
            <DriverPage />,
            state,
            { url: '/drivers/asd', path: '/drivers/:id' },
        );

        expect(queryByText('404')).toBeInTheDocument();
    });

    it('renders driver page', () => {
        const { queryByText, queryByAltText } = renderWithRouterAndRedux(
            <DriverPage />,
            state,
            { url: '/drivers/albon', path: '/drivers/:id' },
        );

        expect(queryByText('Alexander Albon')).toBeInTheDocument();
        expect(queryByText('23')).toBeInTheDocument();
        expect(queryByText('23')).toBeInTheDocument();
        expect(queryByAltText('Alexander Albon')).toBeInTheDocument();
        expect(queryByAltText('Red Bull')).toBeInTheDocument();
    });
});
