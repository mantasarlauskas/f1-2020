import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from 'client/components/HomePage';
import { renderWithRouter } from 'client/testing/utils';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
}));

describe('<HomePage />', () => {
    it('renders content', () => {
        const { queryByText, queryByAltText } = renderWithRouter(<HomePage />);
        expect(queryByText('F1 stats')).toBeInTheDocument();
        expect(queryByText('Results')).toBeInTheDocument();
        expect(queryByAltText('Home')).toBeInTheDocument();
        expect(queryByText('2021 Schedule')).toBeInTheDocument();
    });
});
