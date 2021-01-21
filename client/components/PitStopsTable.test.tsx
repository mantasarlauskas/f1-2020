import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import PitStopsTable from 'client/components/PitStopsTable';
import { renderWithRedux } from 'client/testing/utils';
import { getReduxState } from 'client/testing/testFactories';

describe('<PitStopsTable />', () => {
    const state = getReduxState();
    it('does not render anything when pit stop table data does not exist', () => {
        const { container } = renderWithRedux(
            <PitStopsTable roundId="1" />,
            state,
        );

        expect(container).toBeEmptyDOMElement();
    });

    it('renders table data', () => {
        const { queryByText } = renderWithRedux(
            <PitStopsTable roundId="0" />,
            state,
        );

        expect(queryByText('Alexander Albon')).toBeInTheDocument();
        expect(queryByText('14:22:39')).toBeInTheDocument();
        expect(queryByText('28.417')).toBeInTheDocument();
    });
});
