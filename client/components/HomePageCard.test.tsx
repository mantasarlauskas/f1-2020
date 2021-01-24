import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePageCard from 'client/components/HomePageCard';
import { renderWithRouter } from 'client/testing/utils';
import { RouteType } from 'client/utils/router';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(),
}));

describe('<HomePageCard />', () => {
    const props = {
        type: RouteType.SCHEDULE,
        url: '/schedule',
    };

    it('renders title', () => {
        const { queryByText } = renderWithRouter(<HomePageCard {...props} />);
        expect(queryByText('2021 Schedule')).toBeInTheDocument();
    });

    it('on click goes to driver page', () => {
        const { getByText } = renderWithRouter(<HomePageCard {...props} />);
        fireEvent.click(getByText('2021 Schedule'));
        expect(window.location.pathname).toEqual('/schedule');
    });
});
