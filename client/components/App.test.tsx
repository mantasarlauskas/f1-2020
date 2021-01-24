import React from 'react';
import App from 'client/components/App';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'client/testing/utils';

jest.mock('client/components/DriversPage', () => () => <span>DriversPage</span>);
jest.mock('client/components/ConstructorsPage', () => () => <span>ConstructorsPage</span>);
jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
}));

describe('<App />', () => {
    window.scrollTo = jest.fn();

    it('renders drivers page', () => {
        const { queryByText } = renderWithRouter(<App />, { url: '/drivers' });
        expect(queryByText('DriversPage')).toBeInTheDocument();
    });

    it('renders constructors page', () => {
        const { queryByText } = renderWithRouter(<App />, { url: '/constructors' });
        expect(queryByText('ConstructorsPage')).toBeInTheDocument();
    });

    it('renders empty page when route does not exist', () => {
        const { queryByText } = renderWithRouter(<App />, { url: '/asd' });
        expect(queryByText('404')).toBeInTheDocument();
    });
});
