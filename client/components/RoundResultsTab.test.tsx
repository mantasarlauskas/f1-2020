import React from 'react';
import RoundResultsTab from 'client/components/RoundResultsTab';
import { renderWithRouter } from 'client/testing/utils';
import { RoundResultsTableType } from 'client/components/RoundResultsTable';
import '@testing-library/jest-dom/extend-expect';

describe('<RoundResultsTab />', () => {
    const props = {
        title: 'title',
        roundId: '1',
        type: RoundResultsTableType.RACE,
    };

    it('renders content', () => {
        const { queryByText } = renderWithRouter(<RoundResultsTab {...props} />);
        expect(queryByText('title')).toBeInTheDocument();
    });

    it('adds active class when url matches', () => {
        const { container } = renderWithRouter(<RoundResultsTab {...props} />, {
            url: '/results/1/race',
        });

        expect(container.getElementsByClassName('active').length).toEqual(1);
    });

    it('does not add active class when url does not match', () => {
        const { container } = renderWithRouter(<RoundResultsTab {...props} />, {
            url: '/results/1/qualifying',
        });

        expect(container.getElementsByClassName('active').length).toEqual(0);
    });
});
