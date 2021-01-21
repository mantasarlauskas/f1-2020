import React from 'react';
import { fireEvent } from '@testing-library/react';
import Schedule from 'client/components/Schedule';
import { renderWithRouter } from 'client/testing/utils';
import '@testing-library/jest-dom/extend-expect';
import { getSchedule } from 'client/testing/testFactories';

describe('<Schedule />', () => {
    const props = {
        scheduleRow: getSchedule(),
    };

    it('renders content', () => {
        const { queryByText } = renderWithRouter(<Schedule {...props} />);
        expect(queryByText('Austrian Grand Prix')).toBeInTheDocument();
        expect(queryByText('Red Bull Ring')).toBeInTheDocument();
        expect(queryByText('2020-07-05')).toBeInTheDocument();
        expect(queryByText('Results')).toBeInTheDocument();
    });

    it('on results button click goes to results page', () => {
        const { getByText } = renderWithRouter(<Schedule {...props} />);
        fireEvent.click(getByText('Results'));
        expect(window.location.pathname).toEqual('/roundResults/1');
    });
});
