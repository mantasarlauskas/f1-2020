import React from 'react';
import Router from 'client/components/Router';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'client/testing/utils';

jest.mock('client/components/DriversPage', () => () => <span>DriversPage</span>);
jest.mock('client/components/ConstructorsPage', () => () => <span>ConstructorsPage</span>);

describe('<Router />', () => {
    it('renders drivers page', () => {
        const { queryByText } = renderWithRouter(<Router />, { url: '/drivers' });
        expect(queryByText('DriversPage')).toBeInTheDocument();
    });

    it('renders constructors page', () => {
        const { queryByText } = renderWithRouter(<Router />, { url: '/constructors' });
        expect(queryByText('ConstructorsPage')).toBeInTheDocument();
    });

    it('renders empty page when route does not exist', () => {
        const { queryByText } = renderWithRouter(<Router />, { url: '/asd' });
        expect(queryByText('404')).toBeInTheDocument();
    });
});
