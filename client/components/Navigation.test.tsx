import React from 'react';
import { renderWithRouter } from 'client/testing/utils';
import Navigation from 'client/components/Navigation';
import { fireEvent } from '@testing-library/react';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
}));

describe('<Navigation />', () => {
    it('renders navigation and on click redirects to url', () => {
        const { getByText } = renderWithRouter(<Navigation />);
        fireEvent.click(getByText('Drivers'));
        expect(window.location.pathname).toEqual('/drivers');
    });
});
