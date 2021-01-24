import React from 'react';
import { fireEvent } from '@testing-library/react';
import Race from 'client/components/Race';
import { renderWithRouter } from 'client/testing/utils';
import '@testing-library/jest-dom/extend-expect';
import { getRace } from 'client/testing/testFactories';

describe('<Race />', () => {
    const props = {
        raceRow: getRace(),
    };

    it('renders content', () => {
        const { queryByText } = renderWithRouter(<Race {...props} />);
        expect(queryByText('Austrian Grand Prix')).toBeInTheDocument();
        expect(queryByText('Red Bull Ring')).toBeInTheDocument();
        expect(queryByText('2020-07-05')).toBeInTheDocument();
        expect(queryByText('Results')).not.toBeInTheDocument();
    });

    it('shows results button', () => {
        const { queryByText } = renderWithRouter(<Race {...props} showResultsButton />);
        expect(queryByText('Results')).toBeInTheDocument();
    });

    it('on results button click goes to results page', () => {
        const { getByText } = renderWithRouter(<Race {...props} showResultsButton />);
        fireEvent.click(getByText('Results'));
        expect(window.location.pathname).toEqual('/results/1');
    });
});
