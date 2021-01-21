import React from 'react';
import { render } from '@testing-library/react';
import RoundResultsTabs from 'client/components/RoundResultsTabs';

jest.mock('client/components/RoundResultsTab', () => () => <span>RoundResultsTab</span>);

describe('<RoundResultsTabs />', () => {
    const props = {
        roundId: '1',
    };

    it('renders content', () => {
        const { queryAllByText } = render(<RoundResultsTabs {...props} />);
        expect(queryAllByText('RoundResultsTab').length).toEqual(3);
    });
});
