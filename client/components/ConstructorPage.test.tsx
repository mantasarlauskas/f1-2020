import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConstructorPage from 'client/components/ConstructorPage';
import { renderWithRouterAndRedux } from 'client/testing/utils';
import { getReduxState } from 'client/testing/testFactories';

jest.mock('client/components/ConstructorResultsTable', () => () => <span />);

describe('<ConstructorPage />', () => {
    const state = getReduxState();

    it('returns empty page when constructor id is invalid', () => {
        const { queryByText } = renderWithRouterAndRedux(
            <ConstructorPage />,
            state,
            { url: '/constructors/asd', path: '/constructors/:id' },
        );

        expect(queryByText('404')).toBeInTheDocument();
    });

    it('renders driver page', () => {
        const { queryByText, queryByAltText } = renderWithRouterAndRedux(
            <ConstructorPage />,
            state,
            { url: '/constructors/red_bull', path: '/constructors/:id' },
        );

        expect(queryByText('Red Bull')).toBeInTheDocument();
        expect(queryByAltText('Red Bull')).toBeInTheDocument();
    });

    it('on click opens constructor page', () => {
        const { getByText } = renderWithRouterAndRedux(
            <ConstructorPage />,
            state,
            { url: '/constructors/red_bull', path: '/constructors/:id' },
        );

        fireEvent.click(getByText('Red Bull'));
        expect(window.location.pathname).toEqual('/constructors/red_bull');
    });
});
