import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import RaceResultsTable from 'client/components/RaceResultsTable';
import { renderWithRedux } from 'client/testing/utils';
import { getReduxState } from 'client/testing/testFactories';

describe('<RaceResultsTable />', () => {
    const state = getReduxState();
    it('does not render anything when race table data does not exist', () => {
        const { container } = renderWithRedux(
            <RaceResultsTable roundId="1" />,
            state,
        );

        expect(container).toBeEmptyDOMElement();
    });

    it('renders table data', () => {
        const { queryByText } = renderWithRedux(
            <RaceResultsTable roundId="0" />,
            state,
        );

        expect(queryByText('Max Verstappen')).toBeInTheDocument();
        expect(queryByText('Red Bull')).toBeInTheDocument();
        expect(queryByText('1:19:43:231')).toBeInTheDocument();
    });
});
